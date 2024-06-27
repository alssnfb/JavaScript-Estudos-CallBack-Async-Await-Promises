
const loginUser = (email, password) => {
    return new Promise((resolve, reject) =>{
        const error = false;

        if (error){
            reject(new Error('error in login'))
        }

        console.log("user logged!");
        resolve({email});
    });
}

const getUserVideos = (email) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000);
    });
};

const getVideoDetails = (video) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('getVideoDetails')
             resolve({title: "video tittle"});
        }, 2500);
    });
};

// loginUser('alisson@gmail.com', '123456')
// .then((user) => getUserVideos(user.email))
// .then((videos) => getVideoDetails(videos[0]))
// .then(getVideoDetails => console.log({getVideoDetails}))
// .catch((error) => console.log({error}));


const displayuser = async () => {
    try {
        const user = await loginUser('alisson@gmail.com', '123456');
        const videos = await getUserVideos(user.email);
        const videoDetails = await getVideoDetails(videos[0])
        
        console.log({videoDetails})
    } catch (error) {
        console.log({error})       
    }
};

displayuser();

// // Promise.all

// const yt = new Promise (resolve => {
//     setTimeout(() => {
//         resolve('videos from youtube')
//     }, 2000);
// })

// const fb = new Promise((resolve) =>{
//     setTimeout(() => {
//         resolve('posts from facebook')
//     }, 3000);
// })

// Promise.all([yt, fb]).then(result => {
//     console.log({result});
// });