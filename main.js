document.addEventListener('DOMContentLoaded', () => {
  const tabHeaders = document.querySelectorAll('.tab-header');
  const accordianHeaders = document.querySelectorAll('.accordian-header');
  const tabInactiveContainers = document.querySelectorAll('.tab-inactive');
  const accordianInactiveContainers = document.querySelectorAll('.accordian-inactive');

  function tabActiveToggle() {
    tabHeaders.forEach(header => {
      header.addEventListener('click', () => {
        tabActiveRemove();
        header.classList.add('tab-active');

        if (header.id == 'fit-header-tab') {
          const infoToggle = document.getElementById('fit-tab');
          tabInactiveRemove();
          infoToggle.classList.remove('tab-inactive')
        }
        if (header.id == 'care-header-tab') {
          const infoToggle = document.getElementById('care-tab');
          tabInactiveRemove();
          infoToggle.classList.remove('tab-inactive')
        }
        if (header.id == 'material-header-tab') {
          const infoToggle = document.getElementById('material-tab');
          tabInactiveRemove();
          infoToggle.classList.remove('tab-inactive')
        }
      })
    })
  }

  function tabActiveRemove() {
    tabHeaders.forEach(tab => {
      tab.classList.remove('tab-active');
    })
  }

  function tabInactiveRemove() {
    tabInactiveContainers.forEach(container => {
      container.classList.add('tab-inactive');
    })
  }

  function accordianActiveToggle() {
    accordianHeaders.forEach(header => {
      header.addEventListener('click', () => {
        accordianActiveRemove();
        header.classList.add('accordian-active');

        if (header.id == 'fit-header-accordian') {
          const infoToggle = document.getElementById('fit-accordian');
          accordianInactiveRemove();
          infoToggle.classList.remove('accordian-inactive')
        }
        if (header.id == 'care-header-accordian') {
          const infoToggle = document.getElementById('care-accordian');
          accordianInactiveRemove();
          infoToggle.classList.remove('accordian-inactive')
        }
        if (header.id == 'material-header-accordian') {
          const infoToggle = document.getElementById('material-accordian');
          accordianInactiveRemove();
          infoToggle.classList.remove('accordian-inactive')
        }
      })
    })
  }

  function accordianActiveRemove() {
    accordianHeaders.forEach(accordian => {
      accordian.classList.remove('accordian-active');
    })
  }

  function accordianInactiveRemove() {
    accordianInactiveContainers.forEach(container => {
      container.classList.add('accordian-inactive');
    })
  }

  tabActiveToggle();
  accordianActiveToggle();
});