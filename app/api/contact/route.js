import { AwardIcon } from 'lucide-react';
import nodemailer from 'nodemailer'
import { emitWarning } from 'process'


export async function POST(req) {
    try {
        const {name ,email ,subject ,message} = await req.json();

        if(!name || !email || !message){
            return Response.json(
                {success :false , message : "All Fields are required"},
                {status:400}
            );
        }

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:process.env.EMAIL_USER,
            subject: `New portfollio Contact - ${subject || 'No subject'}`,
            html:`
            <h2>New Contact Form Submission </h2>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong>${email}</p>
            <p><strong>Subject:</strong>${subject}</p>
            <p>${message}</p>            
            `
        })

        return Response.json({
            success:true,
            message:"Email sent Successfully.",
        },
        {status:200}
    );
    } catch (error) {
        console.log(error)
        return Response.json({
            success:false,
            message:"Failed to Send Email.",

        },
        {status :500}
    )
    }
    
}