// 원페이지
const $navigators = document.querySelectorAll('header>nav>ul>li>a');
const $articles = document.querySelectorAll('section>article');

(function(){

  // 네비게이션 클릭하면 스크롤
  let nowIdx = 0;
  let oldIdx = nowIdx;

  $navigators.forEach(($navigator, idx)=>{

    oldIdx = nowIdx;
    nowIdx = idx;
    
    $navigator.addEventListener('click', (e)=>{
      e.preventDefault();
      window.scrollTo({
        top: $articles[idx].offsetTop-150,
        behavior: "smooth"
      })
    })
  })

  // 스크롤탑에따라 네비게이션 밑줄활성화
  
  window.addEventListener('scroll', ()=>{
    let scrollTop = Math.ceil(window.scrollY);
    
    for(let i=0; i<$navigators.length; i++)
      
      if(scrollTop >= $articles[i].offsetTop-170) {
        oldIdx = nowIdx;
        nowIdx = i;
        // console.log('-------------')
        // console.log('oldIdx =',oldIdx)
        // console.log('nowIdx =', nowIdx)
        // console.log('-------------')
  
        // $navigators[oldIdx].parentElement.classList.remove('on');
        $navigators[nowIdx].parentElement.classList.add('on');
        $navigators[oldIdx].parentElement.classList.remove('on');
      }

  })

})();

// 상담원채팅



// 첫번째 아티클의 첫번째 city 슬라이드

const $container1 = document.querySelector('.citylist_slide-area .citylist_slide-container>.citylist_item-container')
let slideWidth = $container1.offsetWidth;


(function(){ //변수의 스코프를 제한하기 위한 함수

  const $btn_next = document.querySelector('article>.citylist .btn_next');
  const $btn_prev = document.querySelector('article>.citylist .btn_prev');
  const $slide_container = document.querySelector('.citylist_slide-area .citylist_slide-container')

  // 이전다음 버튼 클릭하면 슬라이드효과

  // 이전버튼 슬라이드 전환
  $btn_next.addEventListener('click', ()=>{
    $slide_container.style.marginRight = '0px';
    $slide_container.style.marginLeft = -slideWidth + 'px';
    $btn_prev.style.display = 'initial';
    $btn_next.style.display = 'none';
  })

  // 다음버튼 슬라이드 전환
  $btn_prev.addEventListener('click', ()=>{
    $slide_container.style.marginLeft = '0px';
    $slide_container.style.marginRight = -slideWidth + 'px';
    $btn_prev.style.display = 'none';
    $btn_next.style.display = 'initial';
  })

})(); // 첫번째 아티클의 첫번째 city 슬라이드 끝




// 첫번째 아티클의 두번째 event 슬라이드
(function(){ //변수의 스코프를 제한하기 위한 함수
  
  const $btn_next = document.querySelector('article:nth-of-type(1)>.eventBanner .btn_next');
  const $btn_prev = document.querySelector('article:nth-of-type(1)>.eventBanner .btn_prev');
  const $slide_container = document.querySelector('article:nth-of-type(1)>.eventBanner .eventBanner_slide-container');
  const $paginations = document.querySelectorAll('article:nth-of-type(1)>.eventBanner>.pagination>ul>li');
  const $containers = document.querySelectorAll('.eventBanner_slide-container>.event');

  // 이전다음 버튼 클릭하면 슬라이드효과

  let nowIdx = 0;
  let oldIdx = nowIdx;

  // 다음버튼 슬라이드 전환
  $btn_next.addEventListener('click', ()=>{

    oldIdx = nowIdx;

    if(nowIdx < $containers.length-1) {
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';

    //페이지네이션 활성화
    $paginations[oldIdx].removeAttribute('class');
    $paginations[nowIdx].setAttribute('class', 'on');
  })

  // 이전버튼 슬라이드 전환
  $btn_prev.addEventListener('click', ()=>{

    oldIdx = nowIdx;

    if(nowIdx > 0) {
      nowIdx--;
    }else{
      nowIdx = $containers.length-1;
    }

    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';

    //페이지네이션 활성화
    $paginations[oldIdx].removeAttribute('class');
    $paginations[nowIdx].setAttribute('class', 'on');

  })

  // 페이지네이션 누르면 슬라이드전환+활성화
  $paginations.forEach(($pagination, idx)=>{
    $paginations[idx].addEventListener('click', ()=>{
      $slide_container.style.marginLeft = (-slideWidth * idx) + 'px';

      oldIdx = nowIdx;
      nowIdx = idx;
      
      //페이지네이션 활성화
      // $paginations[oldIdx].removeAttribute('class');
      $paginations[oldIdx].removeAttribute('class');
      $paginations[nowIdx].setAttribute('class', 'on');
  })
  })

  // 3초마다 자동 슬라이드 전환
  setInterval(()=>{

    //슬라이드 전환
    oldIdx = nowIdx;

    if(nowIdx < $containers.length-1) {
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';

    //페이지네이션 활성화
    $paginations[oldIdx].removeAttribute('class');
    $paginations[nowIdx].setAttribute('class', 'on');

  }, 3000)

})(); // 첫번째 아티클의 두번째 event 슬라이드 끝





// 두번째 아티클의 hotplace 슬라이드
(function(){
  const $btn_next = document.querySelector('article:nth-of-type(2)>.btn_next');
  const $btn_prev = document.querySelector('article:nth-of-type(2)>.btn_prev');
  const $slide_container = document.querySelector('article:nth-of-type(2) .slide-container');
  const $containers = document.querySelectorAll('article:nth-of-type(2) .slide-container>.item-container');

  // 이전다음 버튼 클릭하면 슬라이드효과

  let nowIdx = 0;
  let oldIdx = nowIdx;
  
  // 다음버튼 슬라이드 전환
  $btn_next.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx++;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx < $containers.length-1) {
      $btn_prev.style.display = 'initial';
    } else if(nowIdx === $containers.length-1) {
      $btn_next.style.display = 'none';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
  
  // 이전버튼 슬라이드 전환
  $btn_prev.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx--;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx === 0) {
      $btn_prev.style.display = 'none';
    } else if(nowIdx < $containers.length-1) {
      $btn_next.style.display = 'initial';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
})();

// 네번째 아티클의 ticket 슬라이드
(function(){
  const $btn_next = document.querySelector('article:nth-of-type(4)>.btn_next');
  const $btn_prev = document.querySelector('article:nth-of-type(4)>.btn_prev');
  const $slide_container = document.querySelector('article:nth-of-type(4) .slide-container');
  const $containers = document.querySelectorAll('article:nth-of-type(4) .slide-container>.item-container');

  // 이전다음 버튼 클릭하면 슬라이드효과

  let nowIdx = 0;
  let oldIdx = nowIdx;
  
  // 다음버튼 슬라이드 전환
  $btn_next.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx++;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx < $containers.length-1) {
      $btn_prev.style.display = 'initial';
    } else if(nowIdx === $containers.length-1) {
      $btn_next.style.display = 'none';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
  
  // 이전버튼 슬라이드 전환
  $btn_prev.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx--;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx === 0) {
      $btn_prev.style.display = 'none';
    } else if(nowIdx < $containers.length-1) {
      $btn_next.style.display = 'initial';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
})();


// 여섯번째 아티클의 transportation 슬라이드
(function(){
  const $btn_next = document.querySelector('article:nth-of-type(6)>.btn_next');
  const $btn_prev = document.querySelector('article:nth-of-type(6)>.btn_prev');
  const $slide_container = document.querySelector('article:nth-of-type(6) .slide-container');
  const $containers = document.querySelectorAll('article:nth-of-type(6) .slide-container>.item-container');

  // 이전다음 버튼 클릭하면 슬라이드효과

  let nowIdx = 0;
  let oldIdx = nowIdx;
  
  // 다음버튼 슬라이드 전환
  $btn_next.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx++;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx < $containers.length-1) {
      $btn_prev.style.display = 'initial';
    } else if(nowIdx === $containers.length-1) {
      $btn_next.style.display = 'none';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
  
  // 이전버튼 슬라이드 전환
  $btn_prev.addEventListener('click', ()=>{
  
    oldIdx = nowIdx;
    nowIdx--;
  
    // 양끝에 다다르면 이전or다음버튼 없앰
    if(nowIdx === 0) {
      $btn_prev.style.display = 'none';
    } else if(nowIdx < $containers.length-1) {
      $btn_next.style.display = 'initial';
    }
  
    $slide_container.style.marginLeft = (-slideWidth * nowIdx) + 'px';
  })
})();


// 푸터 언어선택버튼
const $language_btn = document.querySelector('footer>.footer_bottom>.linked>.language>p');
const $language_list = document.querySelector('footer>.footer_bottom>.linked>.language>ul');
const $language_list_items = document.querySelectorAll('footer>.footer_bottom>.linked>.language>ul>li');

(function(){
  // 클릭하면 목록뜸
  $language_btn.addEventListener('click', ()=>{
      $language_list.classList.toggle('active');
  });

  // 목록 중 클릭한 항목에 활성화표시

  let nowIdx = 0;
  let oldIdx = nowIdx;

  $language_list_items.forEach(($language_list_item, idx)=>{
    $language_list_item.addEventListener('click', ()=>{
  
      oldIdx = nowIdx;
      nowIdx = idx;

      $language_list_items[nowIdx].classList.add('on');
      $language_list_items[oldIdx].classList.remove('on');
    })
  })
})();