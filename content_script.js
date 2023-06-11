
const linkElement = document.createElement("link")
linkElement.rel = 'stylesheet'
linkElement.href = './style.css'

const head = document.head
head.appendChild(linkElement)



// document.body.style.border = "5px solid red"


console.log("hello");

let extOpen = `
<button id="open-extension-btn" 
style = "
padding: 10px;
font-weight: bolder;
font-size: 1rem;
outline: none;
border: none;
border-radius: 10px;
transition: 0.1s;
margin:10px ;

"
>Open Mail Manager</button>
`

let extHtml = `
    <div class="extension-main" id="extension-main" 
        style = "
        position: absolute;
        z-index:10000;
        top: 0 ;
        right: 0 ;
        display: none;
        flex-direction: column;
        max-width: 400px;
        outline: 2px solid white;
        border-radius: 10px;
        padding: 20px;
        justify-content: center;
        background:white;
        box-shadow: 0px 17px 35px 0px rgba(0,0,0,0.1);
        
        "
    >
    
        <h3 
            style = "
            font-weight: bolder;
            letter-spacing: 1.1px;
            text-align: center;
            "
        >Mail Manager</h3>
        <div class="wrapper" 
            style = "
            display: flex;
            flex-direction: column;
            max-width: 380px;
            "
        >
            <p 
                style=" text-align: center;"
            >Mention your important mail addresses here</p>
            <textarea name="emails" id="emails" cols="30" rows="10" 
            placeholder="mail1@gmail.com, mail2@gmail.com, mail3@gmail.com "
            style="
            max-width: 380px;
            border-radius: 10px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.658);
            color: white;
            font-weight: bold;
            "
            ></textarea>
            
            <button id="extension-email-delete-btn" 
                style = "
                padding: 10px;
                font-weight: bolder;
                font-size: 1rem;
                outline: none;
                border: none;
                border-radius: 10px;
                transition: 0.1s;
                margin:10px 0;
                "
            >Delete Others</button>

        </div>
        <button id="close-extension-btn" 
        style = "
        padding: 10px;
        font-weight: bolder;
        font-size: 1rem;
        outline: none;
        border: none;
        border-radius: 10px;
        transition: 0.1s;
        margin:10px 0;
        right:0;
        "
        >Close</button>
        </div>

`

document.body.innerHTML =  document.body.innerHTML + extOpen + extHtml


const extCancelBtn = document.getElementById('close-extension-btn')
const ext = document.getElementById("extension-main")
extCancelBtn.addEventListener('click',()=>{
    ext.style.display = "none"
})

const openExtensionBtn = document.getElementById("open-extension-btn")
openExtensionBtn.addEventListener('click',()=>{
    ext.style.display = "flex"
})