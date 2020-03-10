<template>
  <div class="home">
    <div class="desktop">
      <app-header-desktop />
      <preface-desktop />
      <introduction-desktop />
      <section-features-desktop />
      <section-big-photos-desktop />
      <section-square-photos-desktop />
    </div>
    <div class="mobile">
      <app-header-mobile />
      <preface-mobile />
      <section-big-photos-mobile-first />
      <section-features-mobile />
      <support-launch>
        <h1>Launching on<br>Kickstarter in May 2020</h1>
      </support-launch>
      <section-big-photos-mobile-second />
      <support-launch>
        <h1>Don’t miss your chance to access early-bird deals</h1>
      </support-launch>
      <section-square-photos-mobile />
    </div>
  </div>
</template>

<script>
// Mobile components
import AppHeaderMobile from '@/components/AppHeaderMobile'
import PrefaceMobile from '@/components/PrefaceMobile'
import SectionFeaturesMobile from '@/components/SectionFeaturesMobile'
import SupportLaunch from '@/components/SupportLaunch'
import SectionBigPhotosMobileFirst from '@/components/SectionBigPhotosMobileFirst'
import SectionBigPhotosMobileSecond from '@/components/SectionBigPhotosMobileSecond'
// import SectionJoinWaitlistMobile from '@/components/SectionJoinWaitlistMobile'
import SectionSquarePhotosMobile from '@/components/SectionSquarePhotosMobile'
// Desktop components
import AppHeaderDesktop from '@/components/AppHeaderDesktop'
import PrefaceDesktop from '@/components/PrefaceDesktop'
import IntroductionDesktop from '@/components/IntroductionDesktop'
import SectionFeaturesDesktop from '@/components/SectionFeaturesDesktop'
import SectionBigPhotosDesktop from '@/components/SectionBigPhotosDesktop'
import SectionSquarePhotosDesktop from '@/components/SectionSquarePhotosDesktop'
export default {
  components: {
    AppHeaderMobile,
    PrefaceMobile,
    SectionFeaturesMobile,
    SupportLaunch,
    SectionBigPhotosMobileFirst,
    SectionBigPhotosMobileSecond,
    // SectionJoinWaitlistMobile,
    SectionSquarePhotosMobile,
    AppHeaderDesktop,
    PrefaceDesktop,
    IntroductionDesktop,
    SectionFeaturesDesktop,
    SectionBigPhotosDesktop,
    SectionSquarePhotosDesktop
  }
}
</script>

<style lang="scss">
  $desktop: "(min-width: 768px)";
  $mobile: "(max-width: 768px)";

  .desktop {
    @media #{$mobile} {
      display: none;
    }
  }

  .mobile {
    @media #{$desktop} {
      display: none;
    }
  }
</style>
