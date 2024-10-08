function submitOrder() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    if (name && email) {
        const description = selectedItems.join(', ');
        const total = total.toFixed(2);
        const mailOptions = {
            from: 'giovanni.perez.her.2020@cobach.edu.mx',
            to: email,
            subject: 'Orden de cafetería',
            text: `Nombre: ${name}\nCorreo: ${email}\nDescripción: ${description}\nTotal: $${total}`
        };
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'giovanni.perez.her.2020@cobach.edu.mx',
                pass: 'gokuvsyo#123'
            }
        });
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado con éxito:', info);
                alert(`Orden enviada:\nNombre: ${name}\nCorreo: ${email}\nDescripción: ${description}\nTotal: $${total}`);
                // Reset the order
                total = 0;
                selectedItems = [];
                document.getElementById('totalAmount').innerText = '';
                document.getElementById('description').innerText = '';
                document.getElementById('userName').value = '';
                document.getElementById('userEmail').value = '';
                document.getElementById('total').classList.add('hidden');
                document.getElementById('menu').classList.remove('hidden');
            }
        });
    } else {
        alert('Por favor, completa tu nombre y correo electrónico.');
    }
}
