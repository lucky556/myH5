let mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  // loop: true, // 循环模式选项
  on: {
    init() {
      this.params.methods.move.call(this, 0);
    },
    slideChange() {
      this.params.methods.move.call(this, this.activeIndex, this.previousIndex);
    }
  },
  methods: {
    move(idx, prevIdx) {
      const slide = this.$el.find(`.page_${idx + 1}`);
      slide.find('.big').addClass('move');

      if (typeof prevIdx === 'undefined') return;
      const prevSlide = this.$el.find(`.page_${prevIdx + 1}`);
      prevSlide.find('.big').removeClass('move');
    }
  }
})
let $btn = $('.music'),
    $audio = $('#audio');
let isRunning = false; // 判断按钮是否在旋转
$btn.on('touchend', function () {
  // 用什么依据判断 是否在转
  if (isRunning) {
    $(this).css({ animationPlayState: 'paused' });
    isRunning = false;
    $audio[0].pause();
  } else {
    $(this).css({ animationPlayState: 'running' });
    isRunning = true;
    $audio[0].play();
  }
})




