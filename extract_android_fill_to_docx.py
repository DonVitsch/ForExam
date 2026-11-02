from pathlib import Path
import json

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "data" / "android-development.json"
OUTPUT = ROOT / "Android开发_填空题.docx"


def set_cell_shading(cell, fill_hex):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill_hex)
    tc_pr.append(shd)


def set_cell_margins(cell, top=80, start=120, bottom=80, end=120):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for m, v in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{m}"))
        if node is None:
            node = OxmlElement(f"w:{m}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(v))
        node.set(qn("w:type"), "dxa")


def style_paragraph(paragraph, before=0, after=6, line_spacing=1.25):
    fmt = paragraph.paragraph_format
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing = line_spacing


def add_label_value_table(doc, label, value, fill="E8EEF5"):
    table = doc.add_table(rows=1, cols=2)
    table.style = "Table Grid"
    table.allow_autofit = False
    table.columns[0].width = Inches(0.9)
    table.columns[1].width = Inches(5.6)

    label_cell, value_cell = table.rows[0].cells
    label_cell.width = Inches(0.9)
    value_cell.width = Inches(5.6)
    set_cell_shading(label_cell, fill)
    for cell in (label_cell, value_cell):
        set_cell_margins(cell)

    p = label_cell.paragraphs[0]
    run = p.add_run(label)
    run.bold = True
    run.font.name = "Calibri"
    run.font.size = Pt(10)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER

    p = value_cell.paragraphs[0]
    for idx, line in enumerate(str(value).splitlines() or [""]):
        if idx:
            p.add_run().add_break()
        run = p.add_run(line)
        run.font.name = "Calibri"
        run.font.size = Pt(10.5)
    style_paragraph(p, after=0)
    return table


def build_docx():
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    questions = data["types"]["fill"]

    doc = Document()
    section = doc.sections[0]
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.25

    for style_name, size, color in (
        ("Heading 1", 16, RGBColor(0x2E, 0x74, 0xB5)),
        ("Heading 2", 13, RGBColor(0x2E, 0x74, 0xB5)),
        ("Heading 3", 12, RGBColor(0x1F, 0x4D, 0x78)),
    ):
        style = styles[style_name]
        style.font.name = "Calibri"
        style.font.size = Pt(size)
        style.font.color.rgb = color
        style.font.bold = True

    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_run = title.add_run("Android开发 填空题")
    title_run.bold = True
    title_run.font.name = "Calibri"
    title_run.font.size = Pt(18)
    title_run.font.color.rgb = RGBColor(0x1F, 0x4D, 0x78)
    style_paragraph(title, after=4)

    meta = doc.add_paragraph()
    meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    meta_run = meta.add_run(f"来源：{data.get('name', 'Android开发')}题库    题量：{len(questions)}题")
    meta_run.font.name = "Calibri"
    meta_run.font.size = Pt(10)
    meta_run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    style_paragraph(meta, after=14)

    for index, item in enumerate(questions, start=1):
        heading = doc.add_paragraph()
        h_run = heading.add_run(f"第 {index} 题")
        h_run.bold = True
        h_run.font.name = "Calibri"
        h_run.font.size = Pt(12)
        h_run.font.color.rgb = RGBColor(0x1F, 0x4D, 0x78)
        style_paragraph(heading, before=8 if index > 1 else 0, after=4)

        q = doc.add_paragraph()
        q_run = q.add_run(item["question"])
        q_run.font.name = "Calibri"
        q_run.font.size = Pt(11)
        style_paragraph(q, after=5)

        add_label_value_table(doc, "答案", item.get("answer", ""))
        if item.get("explanation"):
            doc.add_paragraph()
            add_label_value_table(doc, "解析", item["explanation"], fill="F4F6F9")
        if index != len(questions):
            doc.add_paragraph()

    doc.save(OUTPUT)
    return OUTPUT


if __name__ == "__main__":
    print(build_docx())
