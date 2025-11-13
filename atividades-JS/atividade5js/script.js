let senha = prompt("Digite sua senha:");
if (senha.length < 8) {
  alert("Senha inválida: mínimo 8 caracteres");
}
else if (!/[0-9]/.test(senha)) {
  alert("Senha inválida: precisa ter pelo menos 1 número");
}
else if (!/[A-Z]/.test(senha)) {
  alert("Senha inválida: precisa ter pelo menos 1 letra maiúscula");
}
else if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
  alert("Senha inválida: precisa ter pelo menos 1 caractere especial");
}
else {
  alert("Senha válida");
}
