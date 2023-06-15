let pageNo = 1;
let rowsPerPage = 10;


//***********do pagination functionality***********/
function pagination(){
    const totalRows = document.querySelectorAll(`#table-body tr`);
    const rows = totalRows.length;
    const totalPage = Math.ceil(rows / rowsPerPage);
    currentGenratedPage();
    showTableRows();
 
//**************show total rows on table example(max 10 rows)**********/
    function showTableRows() {      
        const tableBody = document.getElementById("table-body");           
        let firstIndex = (pageNo - 1) * rowsPerPage;
        let lastIndex = firstIndex + (rowsPerPage - 1);
    
        if (lastIndex >= rows) {
            lastIndex = rows - 1;
        }
    
        let statement = "";
        for (let i = firstIndex; i <= lastIndex; i++) {
            statement += `<tr>${totalRows[i].innerHTML}</tr>`
        }
        tableBody.innerHTML = statement;
    
        document.querySelectorAll(".pageNos").forEach(ele => {
            ele.classList.remove("active");
            console.log(ele)
        });
        document.getElementById(`pageno${pageNo}`).classList.add('active')

    
        if (pageNo == 1) {
            let reverseBtn = document.getElementById('prv-btn')
            reverseBtn.classList.add('disabled')
            let startBtn = document.getElementById('start-btn')
            startBtn.classList.add('disabled')
        } else {
            let reverseBtn = document.getElementById('prv-btn')
            reverseBtn.classList.remove('disabled')
            let startBtn = document.getElementById('start-btn')
            startBtn.classList.remove('disabled')
        }

        if (pageNo == totalPage) {
            let forwardBtn = document.getElementById('nxt-btn')
            forwardBtn.classList.add('disabled')
            let endBtn = document.getElementById('end-btn')
            endBtn.classList.add('disabled')
        } else {
            let forwardBtn = document.getElementById('nxt-btn')
            forwardBtn.classList.remove('disabled')
            let endBtn = document.getElementById('end-btn')
            endBtn.classList.remove('disabled')
        }
    
    
    }
    
    
//************shows userdata of current page & navigate between pages (page-buttons)************/  
    function currentGenratedPage() {
        //first page button
        let startBtn = document.createElement('button');
        startBtn.classList.add("page-btn");
        startBtn.setAttribute("type", "button");
        startBtn.setAttribute("id", "start-btn");
        startBtn.innerHTML = `<i class="fa-sharp fa-solid fa-angles-left fa-lg"></i>`

        document.getElementById("pagination-buttons").append(startBtn)
        startBtn.addEventListener("click", function(){
            pageNo = 1;
            showTableRows()
        })

        //previous page button
        let prevBtn = document.createElement('button');
        prevBtn.classList.add("page-btn");
        prevBtn.setAttribute("type", "button");
        prevBtn.setAttribute("id", "prv-btn");
        prevBtn.innerHTML = `<i class="fa-sharp fa-solid fa-angle-left fa-lg"></i>` 
        

        document.getElementById("pagination-buttons").append(prevBtn)
        prevBtn.addEventListener("click", function(){
            pageNo--;
            showTableRows();
        })

        //buttons
        let button;
        
        for (let i = 1; i <= totalPage; i++) {
            button = document.createElement('button');
            button.setAttribute('id', `pageno${i}`);
            button.setAttribute('type', 'button');
            button.classList.add('page-btn','pageNos')
            button.innerText = i
            if (i == 1) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
            document.getElementById("pagination-buttons").append(button)
            button.addEventListener("click", function(){
                pageNo = parseInt(i);
                showTableRows();
            })
        }

        //next page button
        let nextBtn = document.createElement('button');
        nextBtn.classList.add("page-btn");
        nextBtn.setAttribute("type", "button");
        nextBtn.setAttribute("id", "nxt-btn");
        nextBtn.innerHTML = `<i class="fa-sharp fa-solid fa-angle-left fa-rotate-180 fa-lg"></i>`
        
        document.getElementById("pagination-buttons").append(nextBtn)
        nextBtn.addEventListener("click", function(){
            if(pageNo < totalPage){
                pageNo++;
                showTableRows();
            }
        })

        //last page button
        let endBtn = document.createElement('button');
        endBtn.classList.add("page-btn");
        endBtn.setAttribute("type", "button");
        endBtn.setAttribute("id", "end-btn");
        endBtn.innerHTML = `<i class="fa-solid fa-angles-left fa-rotate-180 fa-lg"></i>`

        document.getElementById("pagination-buttons").append(endBtn)
        endBtn.addEventListener("click", function(){
            pageNo = totalPage;
            showTableRows();
        })


    }
    
}


