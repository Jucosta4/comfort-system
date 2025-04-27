// Função de validação do formulário
document.getElementById('form-cliente')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até validar
  
    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
  
    // Validação
    if (nome === "" || email === "" || telefone === "") {
      document.getElementById('mensagem').innerHTML = "Todos os campos devem ser preenchidos!";
      document.getElementById('mensagem').style.color = "red";
    } else {
      document.getElementById('mensagem').innerHTML = "Cadastro realizado com sucesso!";
      document.getElementById('mensagem').style.color = "green";
    }
  });
  
  document.getElementById('form-anfitriao')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
  
    if (nome === "" || email === "" || telefone === "") {
      document.getElementById('mensagem').innerHTML = "Todos os campos devem ser preenchidos!";
      document.getElementById('mensagem').style.color = "red";
    } else {
      document.getElementById('mensagem').innerHTML = "Cadastro realizado com sucesso!";
      document.getElementById('mensagem').style.color = "green";
    }
  });
  
  document.getElementById('form-imovel')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const localizacao = document.getElementById('localizacao').value;
    const preco = document.getElementById('preco').value;
  
    if (nome === "" || localizacao === "" || preco === "") {
      document.getElementById('mensagem').innerHTML = "Todos os campos devem ser preenchidos!";
      document.getElementById('mensagem').style.color = "red";
    } else {
      document.getElementById('mensagem').innerHTML = "Cadastro realizado com sucesso!";
      document.getElementById('mensagem').style.color = "green";
    }
  });
  
  