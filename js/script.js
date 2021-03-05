var myFullpage = new fullpage('#fullpage', {
  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  anchors: ['selfIntroductionPage', 'resumePage', 'skillsPage', 'portfoliosPage', 'contactPage'],
  navigation:true,
  navigationTooltips: ['自介', '簡歷', '技能', '作品', '聯絡'],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  menu: '#menu',
  afterLoad: function(origin, destination, direction){
    //section 2
    if(destination.index == 1){
        document.querySelector('#section2').querySelector('.ttt').style.left = 0 + 'px';
        document.querySelector('#section2').querySelector('p').style.opacity = 1;
    }

    //back to original state
    else if(origin && origin.index == 1){
        document.querySelector('#section2').querySelector('.ttt').style.left = 130 + '%';
        document.querySelector('#section2').querySelector('p').style.opacity = 0;
    }

}
  
});