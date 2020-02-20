<template>
  <div class="home">
    <app-header-mobile />
    <section-features-mobile />
    <section-big-photos-mobile />
    <section-join-waitlist-mobile />
  </div>
</template>

<script>
import AppHeaderMobile from '@/components/AppHeaderMobile'
import SectionFeaturesMobile from '@/components/SectionFeaturesMobile'
import SectionBigPhotosMobile from '@/components/SectionBigPhotosMobile'
import SectionJoinWaitlistMobile from '@/components/SectionJoinWaitlistMobile'
export default {
  components: {
    AppHeaderMobile,
    SectionFeaturesMobile,
    SectionBigPhotosMobile,
    SectionJoinWaitlistMobile
  }
}
</script>
