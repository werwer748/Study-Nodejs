//TODO 콜백 패턴(3중첩)을 프로미스로 바꾸는 예제

function findAndSaveUser(Users){
    Users.findOne({},(err, user) => { //첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'hugo';
        user.save((err)=>{ //두번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'},(err, user)=>{ //세번째 콜백
                //생략
            });
        });
    });
}
//! --findOne, save 메서드가 프로미스를 지원한다고 가정---
function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'hugo';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{
        //생략
    })
    .catch(err => {
        console.error(err);
    });
}