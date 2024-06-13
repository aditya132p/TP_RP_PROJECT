var inputTag = document.querySelector(".input-tag");
        var olTag = document.querySelector(".todo-list");
        
        var id = 0;
        
        itag.addEventListener("click", function (){
            console.log(itag.className)
            
            
        })
        console.log(itag)
        

        console.log(olTag)

         function markComplete(id) {
            console.log({id})
            const changeElement = document.getElementById(`complete_${id}`);
            var itag = document.querySelector(`#complete_${id} i`);
            

            if(itag.className== 'ri-checkbox-blank-circle-line'){
                itag.classList.toggle('ri-checkbox-blank-circle-line')
                itag.classList.add('ri-checkbox-circle-fill')
                changeElement.style.textDecoration="line-through"
            }
            else if(itag.className == 'ri-checkbox-circle-fill'){
                itag.classList.toggle('ri-checkbox-blank-circle-line')
                itag.classList.remove('ri-checkbox-circle-fill')
                changeElement.style.textDecoration="none"
            }

        }

         function add() {

            var inpText = inputTag.value;
            if (inpText == "") {
                alert("Enter Your text")

            }
            else {
                var li = document.createElement("li");
                li.innerHTML = ` <span id="complete_${id}"> <i  class="ri-checkbox-blank-circle-line"  onclick="markComplete(${id})" ></i> ${inpText} </span>`;
                var btn1 = document.querySelector("#comp");
                olTag.append(li)
                inputTag.value = "";
                id++;
            }
            // ulTag.innerHTM=`<li>${inpText}</li>`;
        }

        console.log(inputTag)