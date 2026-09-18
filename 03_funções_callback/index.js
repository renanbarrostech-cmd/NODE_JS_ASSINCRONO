// chamar banco de dados para pegar os dados do usuario!
const loginUser = (email, password, onError, onSuccess) => {
    setTimeout(() => {
        const error = true
        if (error) {
            onError('Erro na conexão de dados!')
        }
        console.log("Usuario verificado no banco de dados!")
        console.log("Usuario logado com sucesso!")
        onSuccess({ email });
    }, 3000)
}

const getUserVideos = (onSuccess) => {
    // Chamar banco de dados para pegar os videos
    setTimeout(() => {
        onSuccess(["Video_1", "Video_2", "Video_4", "Video_5", "Video_6"])
    }, 2000)
}

  // chamar banco de dados para pegar os detalhes de 1 video
const getUserVideoDetails = (onSuccess) => {
    setTimeout(() => {
        onSuccess({ id: "1", name: "Node.js Assíncrono", duration: 1})
    }, 2000)
}

const user = loginUser("renanbarros.tech@gmail.com", "123456", (user) => {
    console.log(user)

    getUserVideos((videos) => {
        console.log("Videos do usuario recuperados com sucesso!", videos)

        getUserVideoDetails((video) => {
            console.log("Detalhes do video 1 do usuario!", video)
        }, (error) => {
            console.log(error)
        })
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})