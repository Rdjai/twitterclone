const nodemailer = require("nodemailer")


const sendWelcomeEmail = async (toemail, name) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "jagannathkashyap38@gmail.com",
                pass: "crcgrcuthtvgsnpj"
            }
        })
        console.log(toemail);
        const mailOptions = {
            from: "tweens",
            to: toemail,
            subject: "Welcome to Our Platform 🎉",
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome</title>
                <style>
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                  }
                  .container {
                    max-width: 600px;
                    margin: 30px auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
                  }
                  h1 {
                    color: #333333;
                  }
                  p {
                    font-size: 16px;
                    color: #555555;
                    line-height: 1.5;
                  }
                  .btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 24px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                  }
                  .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #999999;
                  }
                  @media only screen and (max-width: 600px) {
                    .container {
                      padding: 20px;
                    }
                    h1 {
                      font-size: 24px;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <h1>Welcome to Tweens! 🎉</h1>
                  <p>Hi there,</p>
                  <p>Thank you for signing up! We're thrilled to have you on board. Get ready to explore, connect, and enjoy everything our platform has to offer.</p>
                  <p>Let’s get started!</p>
                  <a href="https://localhost:3000/" class="btn">Login Now</a>
                  <p class="footer">If you didn't sign up for this account, please ignore this email.</p>
                </div>
              </body>
              </html>
            `
        };

        await transport.sendMail(mailOptions);
        console.log("✅ Welcome email sent to:", toemail);

    } catch (error) {
        console.error("❌ Failed to send welcome email:", error.message);

    }
}

module.exports = sendWelcomeEmail;
