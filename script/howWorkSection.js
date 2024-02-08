document.querySelectorAll(".how-work-section__item-link").forEach(function(howWorkSectionBtn) {
          
    howWorkSectionBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll(".how-work-section__item-link").forEach(function(howWorkSectionBtnRemove) {
            howWorkSectionBtnRemove.classList.remove('how-work-section__item-link_active') 
        })    
        howWorkSectionBtn.classList.add('how-work-section__item-link_active')
        document.querySelectorAll('.how-work-section__info-box').forEach(function(tabContent) {
            tabContent.classList.remove('how-work-section__info-box_active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('how-work-section__info-box_active')
    })
})