document.getElementById('recuperarSenhaBtn').addEventListener('click', () => {
  const emailInstitucional = document.getElementById('email_inst').textContent;

  fetch('https://recuperar-senha', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailInstitucional })
  })
  .then(response => {
      if (response.ok) {
          alert('Senha temporária enviada com sucesso para ' + emailInstitucional);
      } else {
          alert('Erro ao enviar senha temporária');
      }
  })
  .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar senha temporária');
  });
});
