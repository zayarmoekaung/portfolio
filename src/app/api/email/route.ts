import { SMTPClient } from 'emailjs';
import path from 'path';
import { createReadStream } from 'fs';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
 
  const email = await request.formData();
  const formData = Object.fromEntries([...email.entries()]);
  const toEmail = formData.email;
  const toName = formData.name;
  const toType = formData.type;
  const fileDirectory = path.join(process.cwd(), 'info');
  const client = new SMTPClient({
    user: 'zayarmoekaung0@gmail.com',
    password: 'sdlnsbscrbwtjyrt',
    host: 'smtp.gmail.com',
    ssl: true,
  });

  try {
    var filePath = path.join(fileDirectory, toType == 'Resume' ? 'ZayarMoeKaung_Resume_16-05-2023-10-29-33.pdf' : 'zayar_portfolio_05_29_23.pdf');
    var fileName = toType == 'Resume' ? 'ZayarMoeKaung_Resume.pdf' : 'ZayarMoeKaung_Portfolio.pdf'
    const fileStream = createReadStream(filePath);
    
    const emailData = {
      from: 'zayarmoekaung0@gmail.com',
      to: toEmail as string,
      subject: 'Sending Requested ' + toType,
      text:'Sending Requested ' + toType,
      attachment: [
        { data: `
        <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Email Template</title>
    <style>
      /* Define CSS styles for the email */
      body {
        font-family: Arial, sans-serif;
      }
  
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
      }
  
      .content {
        margin-top: 20px;
        padding: 20px;
        background-color: #ffffff;
      }
  
      .logo {
        display: block;
        margin: 0 auto;
        text-align: center;
      }
  
      .logo img {
        max-width: 200px;
        height: auto;
      }
  
      .greeting {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
  
      .message {
        font-size: 16px;
        margin-bottom: 20px;
      }
  
      .signature {
        font-weight: bold;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <div class="logo">
          <img src="https://zayar.otamyanmar.com/icon.png" alt="Logo">
        </div>
        <h1 class="greeting">Greetings!</h1>
        <p class="message">Dear ${toName},</p>
        <p class="message">I am thrilled to have the chance to share my skills and experience with you. </p>
        <p class="message">I have 3+ of experience in Web Development, and I have successfully completed various projects for clients. My expertise  which I believe would be valuable in contributing to your team's success.</p>
        <p class="message"> I am confident that my skills and dedication would make a positive impact.</p>
        <p class="message">I would be delighted to discuss further how my skills align with your needs. Please feel free to reach out to me with any questions or to schedule a meeting or interview.</p>
        <p class="message">I look forward to the opportunity to discuss my qualifications in detail. Attached is my ${toType == 'CV' ? 'resume' : 'portfolio'} for your convenience. Should you need any additional information, please do not hesitate to ask.</p>
        <p class="signature">ZayarMoeKaung</p>
        <p class="signature">+959975427773</p>
      </div>
    </div>
  </body>
  </html>
  
        `, alternative: true },
        {
          name: fileName as string,
          stream: fileStream,
        },
      ],
     
      attachmentName: fileName as string,
    };
   
    await client.sendAsync(emailData);

    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}

