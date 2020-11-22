<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <div class="text-center">
      </div>
      <v-card>
        <v-card-title class="headline">
          Featured Projects
        </v-card-title>
        <v-card-text>
          <v-card>
            <v-img
              :aspect-ratio="224/256"
              width="300"
              src="https://github.com/dustinbowers/intel8080emu/raw/master/screens/gameplay.gif"></v-img>
            <v-card-title>Intel 8080 CPU Emulator</v-card-title>
            <v-card-text>
              <p>Written in Go using the SDL library for rendering. This project is meant to roughly emulate the Intel 8080 CPU and Space Invaders arcade cabinet architecture. The original Space Invaders ROM can be loaded into it.</p>
              <p><a href="https://github.com/dustinbowers/intel8080emu" target="_blank">View Source on GitHub</a></p>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Chip8 CPU Emulator w/ WebAssembly</v-card-title>
            <v-card-text>
              <p>Written in Go using Ebiten library for compiling to WebAssembly. This project wraps my original Chip8 emulator with a new rendering engine that can be executed in-browser.</p>
              <p><nuxt-link to="chip8">View a Live Demo</nuxt-link></p>
              <p><a href="https://github.com/dustinbowers/chip8emu-wasm" target="_blank">View Source on GitHub</a></p>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Chip8 CPU Emulator</v-card-title>
            <v-card-text>
              <p>Written in Go using the SDL library for rendering. This project was my first foray into CPU Emulator development. It was a perfect candidate due to a minimalist opcode table and straightforward architecture</p>
              <p><a href="https://github.com/dustinbowers/chip8emu" target="_blank">View Source on GitHub</a></p>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Links
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <a href="https://www.linkedin.com/in/dustin-bowers-76a0645b" target="_blank">LinkedIn</a>
            </v-list-item>
            <v-list-item>
              <a href="https://www.github.com/dustinbowers" target="_blank">GitHub</a>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Publications
        </v-card-title>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="item in publications"
              :key="item.title">
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="text--secondary">{{ item.abstract }}</p>
                <p><a :href="item.url" target="_blank">View on IEEExplore</a></p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-card {
  margin-bottom:16px;
}
</style>
<script>

export default {
  components: {
  },
  data: () => ({
    publications: [
      {
        title: 'Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. "Deformable alignment using random projections of landmark images." In International Symposium on Biomedical Imaging (ISBI), 2014.',
        abstract: 'This paper presents a method for rigid alignment of objects undergoing deformation. Automated algorithms can be affected by auxiliary motion, such as image motion caused by transducer movement in echocardiography. Unlike de-formable registration methods, the goal of this work is alignment without introducing additional distortion. Our method, based on random projection theory, incorporates motion metadata for phase-aware alignment and outperforms rigid alignment approaches on synthetic data. We demonstrate the benefit of this as a pre-processing step to two common biomedical image analysis tasks: object segmentation and video denoising.',
        url: 'https://ieeexplore.ieee.org/document/6867980'
      },
      {
        title: 'Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. “Biomedical video denoising using supervised manifold learning.” In International Symposium on Biomedical Imaging (ISBI), 2013.',
        abstract: 'This paper presents algorithms for biomedical video denoising using real-valued side information. In certain clinical settings, side information correlated to the underlying motion under imaging is available and can be used to infer motion and act as a global constraint for image denoising. Our methods assume the input data are noisy samples that lie on or near an image manifold parameterized by the associated side information and cast denoising as a supervised manifold learning problem. We demonstrate real-world use on echocardiography data and associated electrocardiogram (ECG) signals.',
        url: 'https://ieeexplore.ieee.org/document/6556756'
      },
      {
        title: 'Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. “Echocardiogram view classification using low-level features.” In International Symposium on Biomedical Imaging (ISBI), 2013.',
        abstract: 'This paper presents a view classification method for 2D heart ultrasound. Our method uses low-level image features to train a frame-level classifier, which unlike related approaches, does not require an additional pixel-level classification of heart structures. By employing kernel-based classification, our algorithm can classify images from any phase of the heartbeat cycle and efficiently incorporate information from subsequent frames without re-training the model. On real-world data, our algorithm achieves 98.51% accuracy for 8-way classification. While the method can efficiently aggregate multiple frames, in ~94% of the tests, identification only requires a single frame.',
        url: 'https://ieeexplore.ieee.org/document/6556584'
      }
    ]
  })
}
</script>
