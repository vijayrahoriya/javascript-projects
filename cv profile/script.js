const data = [
    {
        name : 'Rohan das',
        age : 18,
        city : 'kolkata',
        language : 'Python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name : 'Kalu das',
        age : 20,
        city : 'jaipur',
        language : 'Java',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/med/men/73.jpg'
    },
    {
        name : 'Arun kumar',
        age : 16,
        city : 'Sanganer',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/med/men/79.jpg'
    },
    {
        name : 'Sumit D',
        age : 21,
        city : 'Delhi',
        language : 'C++',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/med/men/76.jpg'
    }
]

const cvItreator = (profiles)=>{
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex<profiles.length ? 
            {value : profiles[nextIndex++], done: false} : 
            {done : true}
        }
    }
}

const candidate = cvItreator(data);
const next = document.getElementById('next');

const nextCv = () =>{
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `
                        <ul class="list-group">
                            <li class="list-group-item">Name : ${currentCandidate.name}</li>
                            <li class="list-group-item">Age : ${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in : ${currentCandidate.city} </li>
                            <li class="list-group-item">Langauage : ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework : ${currentCandidate.framework}</li>
                        </ul>`

    }
    else{
        alert("End of candidates applications")
        window.location.reload();
    }
}

nextCv();
next.addEventListener('click',nextCv);
