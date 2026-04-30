import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, organisation, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation?.trim() ? `Organisation: ${organisation}` : null,
      '',
      'Message:',
      message,
    ].filter((line) => line !== null)

    const { error } = await resend.emails.send({
      from: 'website@learningmakers.com',
      to: 'info@learningmakers.com',
      replyTo: email,
      subject: `New enquiry from ${name} — Learning Makers website`,
      text: bodyLines.join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
