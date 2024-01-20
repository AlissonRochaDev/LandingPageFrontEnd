// Validações e Tratativas de Campos.
function ValidarFormulario(){
    if(document.form.nome.value == ''){
        alert("Preencher o campo obrigatório Nome!");
        document.form.nome.focus();
        return false;
    }

    if(document.form.email.value == ''){
        alert("Preencher o campo obrigatório E-mail!");
        document.form.email.focus();
        return false;
    }

    if(document.form.ass.value == ''){
        alert("Preenher o campo obrigatório Assunto!");
        document.form.ass.focus();
        return false;
    }

    if(document.form.msg.value == ''){
        alert("Preencher o campo obrigatório Mensagem!");
        document.form.msg.focus();
        return false;
    }
}