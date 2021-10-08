async function getHero(){
    try {
        const res = await axios.get('/heros');
        const heros = res.data;
        const list = document.getElementById('list');
        
        list.innerHTML = '';
        
        console.log(heros);
        Object.keys(heros).map(function (key) {
        const heroDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = heros[key];
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => { // 수정 버튼 클릭
          const name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/hero/' + key, { name });
            getHero();
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { // 삭제 버튼 클릭
          try {
            await axios.delete('/hero/' + key);
            getHero();
          } catch (err) {
            console.error(err);
          }
        });

        heroDiv.appendChild(span);
        heroDiv.appendChild(edit);
        heroDiv.appendChild(remove);
        list.appendChild(heroDiv);
        });
    }
    catch(err){
        console.error(err);
    }
}

window.onload = getHero;
document.getElementById('form').addEventListener('submit',async (e) => {
    e.preventDefault();
    const heroname = e.target.heroname.value;
    if(!heroname){
        return alert('히어로명과 능력을 모두 입력해주세요!');
    }
    try{
        await axios.post('/hero',{heroname});
        getHero();
        // console.log(heroname,heropower)
    }
    catch(err){
        console.error(err);
    }
    e.target.heroname.value = '';
});