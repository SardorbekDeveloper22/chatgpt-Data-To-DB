

let userReal = document.getElementsByClassName("empty:hidden")
let botReal = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert dark")
let copyBtnBot = document.getElementsByClassName("flex ml-auto gap-2 rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400")

// userReal[0].remove()

if (userReal.length <= botReal.length){
    for (let i = 0; i < userReal.length; i++) {
        let currentUserReal = userReal[i]
        let currentBotReal = botReal[i]

        var data = {
        user_input: currentUserReal,
        bot_input: currentBotReal
        };

        // Fetch so'rovi yaratish
        fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
        console.log('Natija:', result);
        })
        .catch(error => {
        console.error('Xatolik:', error);
        });


    }
}
