const tl=gsap.timeline({defaults:{ease: 'power1.out'}});
tl.to(".slider > div > div > span",{y:"0%",stagger:0.4},1);
tl.to(".slider-2",{y:"-100%",duration:2},"+=1");
tl.to(".slider",{y:"-100%",duration:1},"-=1.4");
