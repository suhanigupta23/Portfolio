import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume_pdf(output_path):
    # Letter size: 612 x 792 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=22,
        bottomMargin=20
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=19,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.black
    )
    
    sub_header_style = ParagraphStyle(
        'SubHeader',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.black
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=11.5,
        leading=13,
        textColor=colors.black,
        spaceBefore=3,
        spaceAfter=1
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.8,
        leading=10.8,
        textColor=colors.black
    )

    bold_body_style = ParagraphStyle(
        'BoldResumeBody',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8.8,
        leading=10.8,
        textColor=colors.black
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=10.5,
        leftIndent=10,
        firstLineIndent=-7,
        textColor=colors.black,
        spaceBefore=0.5,
        spaceAfter=0.5
    )

    story = []

    # 1. Header
    story.append(Paragraph("S<font size=15>UHANI</font> G<font size=15>UPTA</font>", name_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("Bhopal, Madhya Pradesh, India", sub_header_style))
    story.append(Spacer(1, 1))
    
    contact_links = (
        '&#9742; 8770562841 &nbsp;|&nbsp; '
        '&#9993; <a href="mailto:suhanigupta2304@gmail.com"><u>suhanigupta2304@gmail.com</u></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/suhanigupta23/Portfolio"><u>Portfolio</u></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/suhani-gupta23/"><u>LinkedIn</u></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/suhanigupta23"><u>GitHub</u></a> &nbsp;|&nbsp; '
        '<a href="https://leetcode.com/u/SuhaniGupta_/"><u>LeetCode</u></a>'
    )
    story.append(Paragraph(contact_links, sub_header_style))
    story.append(Spacer(1, 2))

    # Helper function for section titles with underline
    def add_section_header(title):
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=0.6, color=colors.black, spaceBefore=1, spaceAfter=2.5))

    # 2. Education
    add_section_header("Education")
    edu_data = [
        [
            Paragraph("<b>Degree/Certificate</b>", bold_body_style),
            Paragraph("<b>Institute</b>", bold_body_style),
            Paragraph("<b>Year</b>", bold_body_style)
        ],
        [
            Paragraph("B.Tech(CSE)", body_style),
            Paragraph("Indian Institute of Information Technology, Kota", body_style),
            Paragraph("2023 – 2027", body_style)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[115, 345, 88])
    edu_table.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.black),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 2))

    # 3. Experience
    add_section_header("Experience")
    exp_header = [
        [
            Paragraph("<b>Open Source Contributor | GirlScript Summer of Code</b>", bold_body_style),
            Paragraph("<i>May 2024 - Aug 2024</i>", ParagraphStyle('ExpDate', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    exp_table = Table(exp_header, colWidths=[385, 163])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(exp_table)
    story.append(Paragraph("• Implemented global state management using React Context API for the Moksh repository, ensuring seamless data persistence for core features across application routes.", bullet_style))
    story.append(Paragraph("• Developed responsive UI solutions and resolved complex component lifecycle bugs across multiple open-source repositories utilizing React.js and custom hooks.", bullet_style))
    story.append(Paragraph("• Ranked in the top 11% (Top 160 of 1,500+ contributors) by consistently collaborating with maintainers via Git to review, optimize, and merge production-ready code.", bullet_style))
    story.append(Spacer(1, 2))

    # 4. Projects
    add_section_header("Projects")
    
    # Project 1: SketchRoom
    proj1_header = [
        [
            Paragraph("<b>1. SketchRoom : Real-Time Collaborative Whiteboard</b>", bold_body_style),
            Paragraph('<a href="https://sketch-room-ashy.vercel.app/"><u><i>Live Link</i></u></a>', ParagraphStyle('LiveLink', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    p1_table = Table(proj1_header, colWidths=[448, 100])
    p1_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(p1_table)
    story.append(Paragraph("<i>Tech Stack: Spring Boot, React, WebSocket (STOMP), Redis, PostgreSQL, TypeScript, Docker</i>", body_style))
    story.append(Paragraph("• Engineered a collaborative whiteboard with Spring Boot WebSocket (STOMP) enabling live multi-user drawing sync across shared rooms with sub-100ms latency.", bullet_style))
    story.append(Paragraph("• Implemented Redis write-behind caching to buffer high-frequency draw events and batch-flush to PostgreSQL every 30s, reducing DB writes by ~98%.", bullet_style))
    story.append(Spacer(1, 1.5))

    # Project 2: InTune
    proj2_header = [
        [
            Paragraph("<b>2. InTune : AI Roommate Matching Platform</b>", bold_body_style),
            Paragraph('<a href="https://in-tune-phi.vercel.app/"><u><i>Live Link</i></u></a>', ParagraphStyle('LiveLink2', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    p2_table = Table(proj2_header, colWidths=[448, 100])
    p2_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(p2_table)
    story.append(Paragraph("<i>Tech Stack: React, TypeScript, Spring Boot, Java, FastAPI, Python, Sentence-Transformers, MongoDB, Tailwind CSS, Tesseract.js, Web Speech API (OmniDim)</i>", body_style))
    story.append(Paragraph("• Reimagined roommate-finding around lifestyle compatibility using OmniDim voice/text descriptions, semantically compared via a Sentence-Embedding model (SBERT) to surface genuinely compatible matches.", bullet_style))
    story.append(Paragraph("• Protected user privacy during discovery with auto-generated anonymous aliases, revealing real identities only after a mutual match.", bullet_style))
    story.append(Paragraph("• Ensured data security with entirely on-device identity verification, OCR'ing and checksum-validating Aadhaar photos in the browser so sensitive documents never leave the user's machine.", bullet_style))
    story.append(Spacer(1, 1.5))

    # Project 3: Saarthi
    proj3_header = [
        [
            Paragraph("<b>3. Saarthi : AI-Powered Women’s Health & Telehealth Platform</b>", bold_body_style),
            Paragraph('<a href="https://saarthi-nine-gamma.vercel.app/"><u><i>Live Link</i></u></a>', ParagraphStyle('LiveLink3', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    p3_table = Table(proj3_header, colWidths=[448, 100])
    p3_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(p3_table)
    story.append(Paragraph("<i>Tech Stack: Spring Boot, React, PostgreSQL, Redis, JWT, WebRTC, Stripe, Gemini API, Resilience4j</i>", body_style))
    story.append(Paragraph("• Built a responsive full-stack web app with JWT-secured REST APIs and a PostgreSQL database to manage patient profiles, cycle tracking, vitals history, and persistent appointment records.", bullet_style))
    story.append(Paragraph("• Enabled browser-based 2-way video calls using a WebSocket signaling server for low-latency doctor-patient consultations, alongside geolocation-based specialist search using Haversine distance scoring.", bullet_style))
    story.append(Paragraph("• Integrated Gemini AI for symptom screening utilizing a Resilience4j circuit breaker for fault-tolerant API failover, and automated secure appointment bookings via Stripe and UPI.", bullet_style))
    story.append(Spacer(1, 2))

    # 5. Technical Skills
    add_section_header("Technical Skills")
    story.append(Paragraph("<b>Languages:</b> Java, JavaScript, TypeScript, Python, C", body_style))
    story.append(Paragraph("<b>Frontend Technologies:</b> React, Tailwind CSS, HTML5, CSS3", body_style))
    story.append(Paragraph("<b>Backend Technologies:</b> Spring Boot, REST APIs, WebSocket", body_style))
    story.append(Paragraph("<b>Databases & Caching:</b> MongoDB, PostgreSQL, Redis, MySQL", body_style))
    story.append(Paragraph("<b>Tools & Platforms:</b> Docker, Vercel, Render, Git", body_style))
    story.append(Paragraph("<b>Relevant Coursework:</b> Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks", body_style))
    story.append(Spacer(1, 2))

    # 6. Hackathons & Achievements
    add_section_header("Hackathons & Achievements")
    story.append(Paragraph("• <b>SheBuilds Hackathon 2025:</b> National Finalist (Top 1%, 1,500+ entries). Built InTune, an AI-powered roommate matching platform with OCR-based identity verification and compatibility scoring.", bullet_style))
    story.append(Paragraph("• <b>HackOrbit Hackathon 2025:</b> Open Innovation Track Winner (1st Place) & Top 10 Finalist of 1,000+ teams. Built Saarthi, an AI-powered women’s health platform with Gemini integration.", bullet_style))
    story.append(Paragraph("• <b>Google Girl Hackathon 2025:</b> Stage 2 Selection (Top 300, 5,000+ participants) Selected in the Software Engineering Track for an AI-integrated full-stack solution Ideathon.", bullet_style))
    story.append(Paragraph("• <b>Competitive Programming:</b> Solved 400+ problems across LeetCode, GeeksforGeeks, and CodeChef (3 &#9733;); consistently practicing Data Structures and Algorithms.", bullet_style))

    doc.build(story)
    print(f"Successfully generated {output_path}")

if __name__ == "__main__":
    out = "/Users/suhanigupta/.gemini/antigravity/scratch/portfolio/public/resume.pdf"
    create_resume_pdf(out)
