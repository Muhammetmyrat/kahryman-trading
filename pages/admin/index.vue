<template>
  <div
    class="relative flex w-screen min-w-[1440px] h-screen min-h-[720px] bg-gradient-to-tr from-rose-900 to-sky-700 text-white"
  >
    <ModelForm v-if="modelForm" @closeModelForm="closeModelForm" />
    <!-- <div class="min-w-full min-h-[720px]"></div> -->
    <!-- <div class="px-[20px] py-[15px] bg-gray-900">
      <div class="w-full h-[80px]">
        <div
          class="w-[100px] h-[50px] bg-gradient-to-tr from-gray-600 to-gray-800"
        ></div>
      </div>
    </div> -->
    <!---->

    <div
      :class="{ 'w-[20%]': navBar, 'w-[10%]': !navBar }"
      class="h-full transition-all ease-in-out duration-[1000ms] pointer-events-auto"
    >
      <div class="w-full h-full">
        <div
          @click="navBar = !navBar"
          class="relative w-full h-[15%] pr-[10px] pb-[5px]"
        >
          <div
            :class="{ absolute: !navBar }"
            class="w-full h-full flex justify-center items-center"
          >
            <img v-if="navBar" class="" src="@/assets/admin/logo.svg" />
            <img v-else class="" src="@/assets/admin/Component8.svg" />
          </div>
        </div>
        <div class="w-full h-[85%] py-[5px]">
          <div class="w-full h-full shadow-2xl">
            <div
              v-for="(name, index) in namesArray"
              :key="(index + 1) * Math.random()"
              class="w-full h-[50px] flex justify-center items-center"
            >
              <button
                @click="selectNameParamsArray(name, index)"
                :ref="'name-' + index"
                class="w-[120px] px-[15px] flex justify-start items-center hover:text-black hover:bg-white focus:bg-white focus:text-black"
              >
                <div class="py-[5px] pr-[5px]">
                  <svg
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="fill-gray-500 fill-current hover:fill-black"
                  >
                    <path
                      d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                    />
                  </svg>
                </div>
                <p v-if="navBar">{{ name.title }}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--#################-->
    <div
      :class="{ 'w-[80%]': navBar, 'w-[90%]': !navBar }"
      class="h-full transition-all ease-in-out duration-[1000ms] pointer-events-auto"
    >
      <div class="w-full h-full">
        <div class="w-full h-[15%] px-[10px] py-[5px]">
          <div class="w-full h-full pl-[20px]">
            <div class="w-full h-full shadow-md"></div>
          </div>
        </div>
        <div class="w-full h-[85%] px-[10px] py-[5px]">
          <div class="w-full h-full shadow-2xl">
            <div class="w-full h-[10%] pl-[20px]">
              <div
                class="w-full h-full pl-[15px] flex justify-start items-center shadow-md"
              >
                <button
                  v-for="(param, index) in nameParamsArray"
                  @click.prevent="updateDates(param, index)"
                  :key="(index + 1) * Math.random()"
                  :ref="'button-' + index"
                  class="min-w-[120px] h-[40px] ml-[15px] flex justify-center items-center hover:bg-white hover:text-black focus:bg-white focus:text-black shadow-md"
                >
                  <span class="inline-block px-[5px]">{{ param.title }}</span>
                </button>
              </div>
            </div>

            <!------------------------------->
            <!-------------Table------------->
            <div class="w-full h-[90%] py-[20px] pl-[20px] overflow-auto">
              <div class="relative overflow-x-auto shadow-2xl">
                <table class="w-full text-sm text-left">
                  <thead class="text-xs uppercase">
                    <tr>
                      <th scope="col" class="px-6 py-3">Product name</th>
                      <th scope="col" class="px-6 py-3">Color</th>
                      <th scope="col" class="px-6 py-3">Category</th>
                      <th scope="col" class="px-6 py-3">Price</th>
                      <th scope="col" class="px-6 py-3">
                        <!-- <th scope="col" class="min-w-[140px] max-w-[240px] px-6 py-3"> -->
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="font-medium text-gray-200">
                    <!--#########################-->
                    <!--#########################-->
                    <!--#########################-->
                    <tr
                      v-for="(object, index) in dates"
                      :key="(index + 1) * Math.random()"
                      class="relative even:bg-gray-900 even:bg-opacity-40"
                    >
                      <template v-for="Translation in object.translations">
                        <td
                          v-for="(parameter, key2, index2) in Translation.title"
                          :key="(index2 + 1) * Math.random()"
                          class="truncate whitespace-nowrap min-w-[140px] max-w-[240px] px-6 py-4"
                        >
                          {{ parameter }}
                        </td>
                      </template>

                      <template v-for="Translation in object.translations">
                        <td
                          v-for="(parameter, key, index2) in Translation.text"
                          :key="(index2 + 1) * Math.random()"
                          class="truncate whitespace-nowrap min-w-[140px] max-w-[240px] px-6 py-4"
                        >
                          {{ parameter }}
                        </td>
                      </template>

                      <td
                        v-if="object.image_path !== undefined"
                        class="whitespace-nowrap min-w-[140px] max-w-[240px] px-6"
                      >
                        <img
                          class="max-w-[240px] max-h-[50px]"
                          :src="`${imgURL}${object.image_path}-700.jpg`"
                          alt=""
                        />
                      </td>

                      <td
                        v-if="object.video_path !== undefined"
                        class="whitespace-nowrap min-w-[140px] max-w-[240px] px-6"
                      >
                        <video
                          ref="Video"
                          class="max-w-[90%] min-w-[30%] h-full"
                          controls
                        >
                          <source
                            ref="suka"
                            :src="`${imgURL}${object.video_path}`"
                            type="video/mp4"
                          />
                          <source src="movie.ogg" type="video/ogg" />
                          Your browser does not support the video tag.
                        </video>
                      </td>
                      <!-- <td>
                        {{ object }}
                      </td> -->

                      <td
                        class="min-w-[140px] max-w-[240px] px-6 py-4 text-right flex justify-around"
                      >
                        <a
                          @click.prevent="createForm(object)"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >Create
                        </a>
                        <a
                          @click.prevent="editForm(object)"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >Edit
                        </a>
                        <a
                          @click.prevent="deleteItem(deleteURL, object)"
                          href=""
                          class="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >Delite</a
                        >
                      </td>
                    </tr>

                    <!--#########################-->
                    <!--#########################-->
                    <!--#########################-->

                    <!-- <tr class="even:bg-gray-700 relative">
                        <th
                          scope="row"
                          class="truncate min-w-[140px] max-w-[240px] px-6 py-4 font-medium text-white whitespace-nowrap"
                        >
                          Apple MacBook Pro 17" Apple MacBook Pro 17"Apple
                          MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro
                          17"
                        </th>
                        <td class="min-w-[140px] max-w-[240px] px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">Sliver</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">$2999</td>
                        <td class="px-6 py-4 text-right">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                          >
                        </td>
                      </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------------->
            <!------------------------------->
          </div>
        </div>
        <!-- <div class="w-full h-[5%] px-[10px] py-[5px] bg-gray-700">
          <div class="w-full h-full bg-gray-800"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ModelForm from '@/components/admin/ModelForm.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  layout: 'admin',
  components: {
    ModelForm,
  },
  data() {
    return {
      navBar: true,
      imgURL: 'http://10.192.3.37:3001/',
      editingLink: '',
      creatingLink: '',
      deleteURL: '',
      modelForm: false,

      //
      nameFocus: '',
      //

      namesArray: [
        //Header
        {
          title: ' Header ',
          href: 'Homepage',
          icon: 'fa fa-home',
          id: 1,
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              title: ' Header Home',
              link: 'get-header/home',
              editingLink: 'save-header/home',
              creatingLink: 'add-header/home',
              deleteLink: 'delete-header/home',
            },
            {
              title: ' Header About',
              link: 'get-header/about',
              editingLink: 'save-header/about',
              creatingLink: 'add-header/about',
              deleteLink: 'delete-header/about',
            },

            // {
            //   title: " Faciliti",
            //   link: "get-home/faciliti",
            //   editingLink: "save-home/faciliti",
            //   creatingLink: "add-home/faciliti",
            // },

            {
              title: ' Products',
              link: 'get-header/product',
              editingLink: 'save-header/product',
              creatingLink: 'add-header/product',
              deleteLink: 'delete-header/product',
            },

            // {
            //   title: " Faciliti-image",
            //   link: "get-home/faciliti-image",
            //   editingLink: "save-home/faciliti-image",
            //   creatingLink: "add-home/faciliti-image",
            // },
            {
              title: ' Gallery',
              link: 'get-header/gallery',
              editingLink: 'save-header/gallery',
              creatingLink: 'add-header/gallery',
              deleteLink: 'delete-header/gallery',
            },
            // {
            //   title: " Sliders",
            //   link: "get-home/sliders",
            //   editingLink: "save-home/sliders",
            //   creatingLink: "add-home/sliders",
            // },

            {
              title: ' Contacts',
              link: 'get-header/contact',
              editingLink: 'save-header/contact',
              creatingLink: 'add-header/contact',
              deleteLink: 'delete-header/contact',
            },
            // {
            //   title: " Map",
            //   link: "get-home/map",
            //   editingLink: "save-home/map",
            //   creatingLink: "add-home/map",
            // },
            // {
            //   title: " Statistic",
            //   link: "get-home/statistic",
            //   editingLink: "save-home/statistic",
            //   creatingLink: "add-home/statistic",
            // },

            // { title: " Statistika", link: "homepage/statistic" },
          ],
        },

        //Homepage
        {
          title: ' Home ',
          href: 'Homepage',
          icon: 'fa fa-home',
          id: 1,
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              title: ' Topics',
              link: 'get-home/topics',
              editingLink: 'save-home/topics',
              creatingLink: 'add-home/topics',
            },

            {
              title: ' Strategy',
              link: 'get-home/faciliti',
              editingLink: 'save-home/faciliti',
              creatingLink: 'add-home/faciliti',
            },
            {
              title: ' Strategy-images',
              link: 'get-home/faciliti-image',
              editingLink: 'save-home/faciliti-image',
              creatingLink: 'add-home/faciliti-image',
              deleteLink: 'delete-home/faciliti-image',
            },
            {
              title: ' Sliders',
              link: 'get-home/sliders',
              editingLink: 'save-home/sliders',
              creatingLink: 'add-home/sliders',
              deleteLink: 'delete-home/sliders',
            },
            {
              title: ' Map',
              link: 'get-home/map',
              editingLink: 'save-home/map',
              creatingLink: 'add-home/map',
            },
            {
              title: ' Statistic',
              link: 'get-home/statistic',
              editingLink: 'save-home/statistic',
              creatingLink: 'add-home/statistic',
            },

            // { title: " Statistika", link: "homepage/statistic" },
          ],
        },
        //About

        // get-about
        // get-home/about
        {
          title: ' About ',
          href: 'About',
          icon: 'fa fa-eject',
          id: 2,
          active: false,
          array: [
            {
              title: ' About Texts ',
              link: 'get-about',
              editingLink: 'save-about',
              creatingLink: 'add-about',
            },
            {
              title: ' About Images ',
              link: 'get-about-image',
              editingLink: 'save-about-image',
              creatingLink: 'add-about-image',
            },
          ],
        },
        //Products
        {
          title: ' Products ',
          href: 'Servicepage',
          icon: 'fa fa-fa fa-sitemap',
          id: 3,
          active: false,
          array: [
            {
              title: 'Products',
              link: 'get-product',
              editingLink: 'save-product',
              creatingLink: 'add-product',
              deleteLink: 'delete-product',
            },
          ],
        },
        //Contactpage

        // get-contact
        // get-home/contact
        {
          title: ' Contacts ',
          href: 'Contactpage',
          icon: 'fa fa-phone',
          id: 5,
          active: false,
          array: [
            {
              title: ' Contact Text ',
              link: 'get-contact',
              editingLink: 'save-contact',
              creatingLink: 'add-contact',
            },
          ],
        },

        //Gallery
        {
          title: ' Gallery ',
          href: 'Homepage',
          icon: 'fa fa-home',
          id: 1,
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              title: ' Image',
              image: false,
              link: 'get-gallery/image',
              editingLink: 'save-gallery',
              creatingLink: 'add-gallery',
              deleteLink: 'delete-gallery',
            },
            {
              title: ' Video',
              video: false,
              link: 'get-gallery/video',
              editingLink: 'save-gallery',
              creatingLink: 'add-gallery',
              deleteLink: 'delete-gallery',
            },
          ],
        },

        //Footer
        {
          title: ' Footer ',
          href: 'Homepage',
          icon: 'fa fa-home',
          id: 1,
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              title: ' FooterText',

              link: 'get-footer/text',
              editingLink: 'save-footer/text',
              creatingLink: 'add-footer/text',
              deleteLink: 'delete-footer/text',
            },
            {
              title: ' Address ',

              link: 'get-footer/address',
              editingLink: 'save-footer/address',
              creatingLink: 'add-footer/address',
              deleteLink: 'delete-footer/address',
            },

            {
              title: ' Phone number ',

              link: 'get-footer/phone',
              editingLink: 'save-footer/phone',
              creatingLink: 'add-footer/phone',
              deleteLink: 'delete-footer/phone',
            },
            {
              title: ' Mail ',

              link: 'get-footer/mail',
              editingLink: 'save-footer/mail',
              creatingLink: 'add-footer/mail',
              deleteLink: 'delete-footer/mail',
            },
          ],
        },
      ],

      nameParamsArray: [
        // { title: "Baş sahypanyň slideri", link: "get-language" },
        // { title: "Baş sahypanyň tekstleri", link: "get-home" },
        {
          title: ' Products ',
          link: 'get-product',
          editingLink: 'save-product',
          creatingLink: 'add-product',
        },
        {
          title: ' Hyzmatdaşlar',
          link: 'get-about',
          editingLink: 'save-about',
          creatingLink: 'add-about',
        },
        {
          title: ' Hyzmatdaşlar',
          link: 'get-home',
          editingLink: 'save-home',
          creatingLink: 'add-home',
        },
        {
          title: ' Hyzmatdaşlar',
          link: 'get-gallery/image',
          editingLink: 'save-gallery',
          creatingLink: 'add-gallery',
        },
        // { title: " Statistika", link: "homepage/statistic" },
      ],

      dates: [
        {
          product_id: '1111',
          translations: [
            {
              title: {
                title1: 'title1_RU',
                title2: 'title2_RU',
                title3: 'title3_RU',
                title4: 'title4_RU',
                title5: 'title5_RU',
              },
              text: {
                text1: 'Text1_RU',
                text2: 'Text2_RU',
                text3: 'Text3_RU',
              },
            },
            {
              title: {
                title1: 'title1_EN',
                title2: 'title2_EN',
                title3: 'title3_EN',
                title4: 'title4_EN',
                title5: 'title5_EN',
              },
              text: {
                text1: 'Text1_EN',
                text2: 'Text2_EN',
                text3: 'Text3_EN',
              },
            },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "en",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
          ],
        },
        {
          product_id: '1111',
          translations: [
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "en",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
          ],
        },

        {
          product_id: '1111',
          translations: [
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "en",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
          ],
        },

        {
          product_id: '1111',
          translations: [
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            {
              title: {
                title1: 'title1',
                title2: 'title2',
                title3: 'title3',
                title4: 'title4',
                title5: 'title5',
              },
              text: {
                text1: 'Text1',
                text2: 'Text2',
                text3: 'Text3',
              },
            },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "en",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
            // {
            //   id: "ID",
            //   title: "title",
            //   text: "Text",
            //   lang: "tm",
            // },
          ],
        },
        // {
        //   product_id: "2222",
        //   translations: [
        //     {
        //       id: "ID",
        //       title: "title_RU",
        //       text: "Text_RU",
        //       lang: "ru",
        //     },
        //     {
        //       id: "ID",
        //       title: "title_EN",
        //       text: "Text_En",
        //       lang: "en",
        //     },
        //     {
        //       id: "ID",
        //       title: "title_TM",
        //       text: "Text_TM",
        //       lang: "tm",
        //     },
        //     {
        //       id: "ID",
        //       title: "title_FR",
        //       text: "Text_FR",
        //       lang: "fr",
        //     },
        //   ],
        // },
      ],
      datesArray: '',
      //
      getLink: '',
    }
  },

  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
    ...mapGetters('admin', ['getDates', 'getEditingLink', 'getCreatingLink']),
    takeArr() {
      this.dates = this.getDates
      console.log('takeArr =>', this.dates)
    },
  },
  methods: {
    ...mapActions('admin', [
      'fetchDates',
      'addFullObject',
      'addEmptyObject',
      'sendDates',
      'selectLinks',
      'selectItemLinks',
    ]),

    async selectNameParamsArray(name, index) {
      this.nameParamsArray = await name.array

      await this.$nextTick(async () => {
        console.log('Param =>', this.$refs['name-' + index][0].active, index)
        this.$refs['name-' + index][0].focus()
      })
      this.nameFocus = this.$refs['name-' + index][0]
    },

    async updateDates1(event) {
      console.log('EVENT', this)
      // console.log("REf", this.$el.onFocus);
    },

    async updateDates(param, index) {
      try {
        console.log(this.$auth.strategy.token.get())
        let token = this.$auth.strategy.token.get()
        // console.log("loggedIn", this.loggedIn);
        console.log('SUKA')
        //
        this.deleteURL = param.deleteLink
        console.log('deleteLink =>', param.deleteLink)

        this.creatingLink = param.creatingLink
        console.log('creatingLink =>', param.creatingLink)

        this.editingLink = param.editingLink
        console.log('editingLink =>', param.editingLink)

        // await this.selectItemLinks({ Item: param });
        // console.log("selectItemLinks =>");

        await this.fetchDates({ changingURL: param.link, Token: token })
        console.log('fetchDates =>')

        /*######################*/

        this.selectLinks({ Link: param.creatingLink })

        this.getLink = param.link

        /*######################*/

        await this.addEmptyObject()
        // console.log("addEmptyObject =>");

        // this.$nextTick(() => {
        //   console.log("Focus =>", this.$refs);
        //   console.log("Param =>", this.$refs["button-" + index][0].$el.focus());
        //   // this.$el.focus(this.$refs["button-" + index][0]);
        //   // this.$refs["button-" + index][0]
        //   // this.$refs["button-" + index];
        // });
        // this.$nextTick(() => {
        //   this.$el.focus();
        // });

        // this.$nextTick(() => {
        //   //   this.takeArr;
        //   //   console.log("this.takeArr", this.takeArr);

        //   this.dates = this.getDates;
        //   console.log("this.dates =>", this.dates);
        // });

        await this.takeArr

        await this.$nextTick(async () => {
          console.log('Param =>', this.$refs['button-' + index][0])

          this.$refs['button-' + index][0].focus()

          // this.$refs(["button-" + index][0].focus() && ["name-" + index][0].focus());

          console.log('this.nameFocus', this.$refs['name-' + index][0])
          // this.nameFocus.focus();
        })
      } catch (error) {
        console.log('updateDates UPS!', error)
      }
    },

    editForm(object) {
      this.modelForm = true
      this.addFullObject({ selectedObject: object })
      this.selectLinks({ Link: this.editingLink })
    },
    createForm(object) {
      this.modelForm = true
      this.addEmptyObject()
    },

    async deleteItem(deleteURL, object) {
      let token = this.$auth.strategy.token.get()
      let res = this.sendDates({
        changingURL: deleteURL,
        Dates: object,
        Token: token,
      })

      await res

      this.$nextTick(async () => {
        await this.fetchDates({ changingURL: this.getLink })
        console.log('fetchDates =>')

        this.dates = await this.getDates
        console.log('this.dates =>', this.dates)

        // await this.takeArr;
      })
    },

    async closeModelForm() {
      this.modelForm = false

      // this.selectLinks({ Link: this.getLink });

      let token = this.$auth.strategy.token.get()
      this.$nextTick(async () => {
        await this.fetchDates({ changingURL: this.getLink, Token: token })
        console.log('fetchDates =>')

        this.dates = await this.getDates
        console.log('this.dates =>', this.dates)

        // await this.takeArr;
      })

      // this.$nextTick();
      // this.dates = await this.getDates;

      // this.$nextTick(() => {
      //   //   this.takeArr;
      //   //   console.log("this.takeArr", this.takeArr);

      //   this.data = this.getDates;
      //   console.log("this.data =>", this.data);
      // });
    },
  },
  watch: {
    dates: (val) => {
      console.log('VAL', val)
    },
  },
}

// get-home/gallery

// get-home
// get-home/home

// get-product
// get-home/product

// get-about
// get-home/about

// get-contact
// get-home/contact
</script>

<style></style>
