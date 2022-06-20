            //document.getElementsByClassNameq
            //console.log("Meu jogo");
            //window.location.reload(forcedReload);
            //alert("Site seguro!");
            numeroA = Math.floor(100*Math.random()+1);
            document.addEventListener("keydown", enter);
            console.log(numeroA);
            function gerar1(){
            var resposta = parseInt(document.getElementById('input').value);
                if (numeroA > 0 < 101){
                document.getElementById("dica").innerHTML = "(O número está entre 0 e 100...)";
                }
                if (numeroA != resposta){
                    document.getElementById("input").value= "";
                }
                if (numeroA < resposta){
                    document.getElementById("dica2").innerHTML = "Tente novamente, o número é menor do que "+resposta+".";
                } else if (numeroA > resposta){
                    document.getElementById("dica2").innerHTML = "Tente novamente, o número é maior do que "+resposta+".";
                } else if (numeroA === resposta){
                    document.getElementById("win").innerHTML = "Parabéns, você acertou o número!";
                    document.getElementById("dica2").style.display = "none";
                    document.getElementById("gerar2").style.display = "block";
                    document.getElementById("dica").style.display ="none";
                    document.getElementById("p").style.display = "none";
                    document.getElementById("aparecer").style.display = "block";
                }
              }
          function enter(){
             switch (event.keyCode){
                case 13:
                var resposta = parseInt(document.getElementById('input').value);
                if (numeroA > 0 < 101){
                document.getElementById("dica").innerHTML = "(O número está entre 0 e 100...)";
                }
                if (numeroA != resposta){
                    document.getElementById("input").value= "";
                }
                if (numeroA < resposta){
                    document.getElementById("dica2").innerHTML = "Tente novamente, o número é menor do que "+resposta+".";
                } else if (numeroA > resposta){
                    document.getElementById("dica2").innerHTML = "Tente novamente, o número é maior do que "+resposta+".";
                } else if (numeroA === resposta){
                    document.getElementById("win").innerHTML = "Parabéns, você acertou o número!";
                    document.getElementById("dica2").style.display = "none";
                    document.getElementById("gerar2").style.display = "block";
                    document.getElementById("dica").style.display = "none";
                    document.getElementById("p").style.display = "none";
                    document.getElementById("aparecer").style.display = "block";
                }
               }
              }
            function tema() {
                var tema = document.getElementById("temas");
                if (tema.classList.contains("tematica") == false){
                    tema.classList.add("tematica");
                    document.getElementById("tema").innerHTML = "Mudar para tema claro ";
                } else if (tema.classList.contains("tematica") == true){
                    tema.classList.remove("tematica");
                    document.getElementById("tema").innerHTML = "Mudar para tema escuro";
                }
               }
             
