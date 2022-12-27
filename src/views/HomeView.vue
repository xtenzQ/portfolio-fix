<template>
  <!-- Menu -->
  <MenuVue :links="links">> My Portfolio<span class="prim"></span></MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>Roi Alfassi - Software Developer</template>

    My name is <b>Roi Alfassi</b> and I'm an Information Systems MSc Student, I
    am a <hi-word>software engineer</hi-word>. My passion is creating new
    software Specializing writing clean understandable code.

    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/roi-alfassi/"
        icon="fab linkedin-in"
        >My Profile</simple-button
      >
      <simple-button
        class="btn-dark text-white"
        url="https://github.com/Roialfassi"
        icon="fab fa-github"
        >My Github</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="mailto:roialfassi@gmail.com"
        icon="fa-regular fa-file-lines"
        >Email me</simple-button
      >
    </template>
  </HeroSection>
  <ExperienceTable id="edu-exp" :experience="experience" />
  <SkillsGrid id="skills" :skills="skills" />
  <ProjectsGrid id="projects" :projects="projects" />
  <AwardsGrid id="awards" :awards="awards" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "awards",
          url: "#awards",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/roi-alfassi/",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/Roialfassi",
        },
      ],
      Creator: "Roi Alfassi",
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    AwardsGrid,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
