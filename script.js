// 天气信息更新
async function updateWeather() {
    try {
        const response = await fetch('/api/weather?city=杭州');
        const weather = await response.json();
        document.querySelector('.weather-summary').innerHTML = `
            <i class="fas fa-sun"></i> 天气预报：${weather.weather}，气温${weather.temp}°C
        `;
    } catch (error) {
        console.log('Weather update failed');
    }
}

// 展开/折叠功能
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const title = section.querySelector('h2');
        const content = section.querySelector('div');
        
        if (title && content) {
            title.addEventListener('click', () => {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                title.classList.toggle('collapsed');
            });
        }
    });
});

// 返回顶部按钮
window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// 分享功能
function shareItinerary() {
    if (navigator.share) {
        navigator.share({
            title: '浙江六日游行程规划',
            text: '查看我的浙江六日游行程安排！',
            url: window.location.href
        })
        .catch(console.error);
    }
}

// 添加到日历
function addToCalendar() {
    const startDate = '2025-05-01';
    const endDate = '2025-05-06';
    const title = '浙江六日游';
    const details = document.querySelector('.overview').innerText;
    
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}`;
    window.open(calendarUrl);
} 