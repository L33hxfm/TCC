document.getElementById('recuperarSenhaBtn').addEventListener('click', () => {
    const emailSiga = document.getElementById('email_Siga').textContent;
  
    fetch('https://your-vercel-app-name.vercel.app/recuperar-senha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailSiga }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar senha temporaria');
    });
  });
