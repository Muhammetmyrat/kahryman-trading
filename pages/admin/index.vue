<template>
  <div
    class="relative flex w-screen min-w-[1440px] h-screen min-h-[720px] bg-white text-black"
  >
    <!-- bg-gradient-to-tr from-violet-900 to-yellow-900 -->
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
      <div class="w-full h-full border-r-[2px] border-black">
        <div
          @click="navBar = !navBar"
          class="relative w-full h-[15%] pr-[10px] pb-[5px] border-b-[2px] border-black"
        >
          <div
            :class="{ absolute: !navBar }"
            class="w-full h-full flex justify-center items-center"
          >
            <img v-if="navBar" class="" src="@/assets/admin/Logo1.svg" />
            <img v-else class="" src="@/assets/admin/Logo2.svg" />
          </div>
        </div>
        <div class="w-full h-[85%] py-[5px]">
          <div class="w-full h-full shadow-2xl">
            <div
              v-for="(name, index) in namesArray"
              :key="(index + 1) * Math.random()"
              @click="selectNameParamsArray(name, index)"
              :ref="'name-' + index"
              class="w-full h-[50px] flex justify-center items-center border-b-[2px] border-black hover:text-white hover:bg-black stroke-black hover:stroke-white focus:bg-black focus:text-white focus:stroke-white"
            >
              <button
                :class="{ 'justify-start': navBar, 'justify-center': !navBar }"
                class="w-[120px] px-[15px] flex items-center"
              >
                <div class="py-[5px] pr-[5px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path :d="name.icon" />
                  </svg>

                  <!-- <path
                      d="M9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM15 33.7Q15.6 33.7 16.05 33.25Q16.5 32.8 16.5 32.2Q16.5 31.6 16.05 31.15Q15.6 30.7 15 30.7Q14.4 30.7 13.95 31.15Q13.5 31.6 13.5 32.2Q13.5 32.8 13.95 33.25Q14.4 33.7 15 33.7ZM15 25.5Q15.6 25.5 16.05 25.05Q16.5 24.6 16.5 24Q16.5 23.4 16.05 22.95Q15.6 22.5 15 22.5Q14.4 22.5 13.95 22.95Q13.5 23.4 13.5 24Q13.5 24.6 13.95 25.05Q14.4 25.5 15 25.5ZM15 17.3Q15.6 17.3 16.05 16.85Q16.5 16.4 16.5 15.8Q16.5 15.2 16.05 14.75Q15.6 14.3 15 14.3Q14.4 14.3 13.95 14.75Q13.5 15.2 13.5 15.8Q13.5 16.4 13.95 16.85Q14.4 17.3 15 17.3ZM21.6 33.7H33.8V30.7H21.6ZM21.6 25.5H33.8V22.5H21.6ZM21.6 17.3H33.8V14.3H21.6ZM9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Z"
                    /> -->
                  <!-- <path
                      d="M14.5 17V14H42V17ZM14.5 25.5V22.5H42V25.5ZM14.5 34V31H42V34ZM7.5 17Q6.85 17 6.425 16.575Q6 16.15 6 15.5Q6 14.85 6.425 14.425Q6.85 14 7.5 14Q8.15 14 8.575 14.425Q9 14.85 9 15.5Q9 16.15 8.575 16.575Q8.15 17 7.5 17ZM7.5 25.5Q6.85 25.5 6.425 25.075Q6 24.65 6 24Q6 23.35 6.425 22.925Q6.85 22.5 7.5 22.5Q8.15 22.5 8.575 22.925Q9 23.35 9 24Q9 24.65 8.575 25.075Q8.15 25.5 7.5 25.5ZM7.5 34Q6.85 34 6.425 33.575Q6 33.15 6 32.5Q6 31.85 6.425 31.425Q6.85 31 7.5 31Q8.15 31 8.575 31.425Q9 31.85 9 32.5Q9 33.15 8.575 33.575Q8.15 34 7.5 34Z"
                    /> -->
                  <!-- <path
                      d="M8 38V35H27.3V38ZM8 21.35V18.35H40V21.35ZM8 29.7V26.7H40V29.7ZM8 13V10H40V13Z"
                    /> -->
                  <!-- </svg> -->
                  <!-- <svg
                    class="fill-gray-500 fill-current hover:fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path
                      d="M8 38V35H27.3V38ZM8 21.35V18.35H40V21.35ZM8 29.7V26.7H40V29.7ZM8 13V10H40V13Z"
                    />
                  </svg> -->
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
        <div
          class="w-full h-[15%] px-[10px] py-[5px] border-b-[2px] border-black"
        >
          <div class="w-full h-full pl-[20px]">
            <div
              class="w-full h-full flex justify-center items-center shadow-md"
            >
              <div class="flex justify-end w-full h-[40px]">
                <div class="flex justify-end w-[50%] h-full px-[20px]">
                  <button
                    @click="logOut"
                    class="min-w-[120px] h-[40px] ml-[15px] flex justify-center items-center bg-red-700 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black shadow-md"
                  >
                    <span class="inline-block px-[5px]">GoBack</span>
                  </button>
                  <!-- <button @click="logOut" class="w-[120px] h-full bg-red-600">
                    QQQ
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[85%] px-[10px] py-[5px]">
          <div class="w-full h-full shadow-2xl">
            <!---->
            <div class="w-full h-[10%] pl-[20px] border-l-[2px] border-black">
              <div
                class="w-full h-full pl-[15px] flex justify-start items-center border-x-[2px] border-b-[2px] border-black shadow-md"
              >
                <button
                  v-for="(param, index) in nameParamsArray"
                  @click.prevent="updateDates(param, index)"
                  :key="(index + 1) * Math.random()"
                  :ref="'button-' + index"
                  class="min-w-[120px] h-[40px] ml-[15px] flex justify-center items-center border-[2px] border-black hover:text-white hover:bg-black focus:bg-white focus:text-black shadow-md"
                >
                  <span class="inline-block px-[5px]">{{ param.title }}</span>
                </button>
              </div>
            </div>

            <!--------------Create Button----------------->
            <div
              v-if="createAndDelete"
              class="w-full h-[7%] pl-[20px] border-x-[2px] border-black"
            >
              <div
                class="w-full h-full flex justify-start items-center shadow-md"
              >
                <button
                  @click.prevent="createForm(object)"
                  class="min-w-full h-full flex justify-center items-center text-xl font-bold border-l-[2px] border-b-[2px] border-black hover:bg-black hover:text-white focus:bg-black focus:text-white shadow-md"
                >
                  Create
                </button>
              </div>
            </div>
            <!-------------Table------------->
            <div
              class="static w-full h-[80%] py-[20px] pl-[20px] border-x-[2px] border-b-[2px] border-black overflow-auto"
            >
              <div class="relative overflow-x-auto shadow-2xl">
                <table
                  class="w-full text-sm text-left border-l-[2px] border-y-[2px] border-black"
                >
                  <thead class="text-xs uppercase">
                    <tr class="w-full flex">
                      <template v-for="(item, index) in dates[0].translations">
                        <th
                          v-for="(parameter, key, index2) in dates[0]
                            .translations[index].title"
                          :key="(index2 + 1) * Math.random()"
                          scope="col"
                          class="max-w-[240px] flex-1 px-6 py-3 border-r-[2px] border-black"
                        >
                          {{ key }}
                        </th>
                      </template>

                      <template v-for="(item, index) in dates[0].translations">
                        <th
                          v-for="(parameter, key, index2) in dates[0]
                            .translations[index].text"
                          :key="(index2 + 1) * Math.random()"
                          scope="col"
                          class="max-w-[240px] flex-1 px-6 py-3 border-r-[2px] border-black"
                        >
                          {{ key }}
                        </th>
                      </template>

                      <th
                        v-if="dates[0].image_path !== undefined"
                        class="max-w-[240px] flex-1 px-6 py-3 border-r-[2px] border-black"
                      >
                        image
                      </th>

                      <th
                        v-if="dates[0].position !== undefined"
                        class="max-w-[240px] flex-1 px-6 py-3 border-r-[2px] border-black"
                      >
                        position
                      </th>
                      <th
                        v-if="dates[0].video_path !== undefined"
                        class="max-w-[240px] flex-1 px-6 py-3 border-r-[2px] border-black"
                      >
                        video
                      </th>

                      <!-- <th scope="col" class="flex-1 px-6 py-3">Color</th>
                      <th scope="col" class="flex-1 px-6 py-3">Category</th>
                      <th scope="col" class="flex-1 px-6 py-3">Price</th> -->
                      <th
                        scope="col"
                        class="px-6 py-4 text-right flex flex-1 justify-start"
                      >
                        <!-- <th scope="col" class=" px-6 py-3"> -->
                        <div class="min-w-[120px] max-w-[240px]"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="w-full font-medium">
                    <!--#########################-->
                    <!--#########################-->
                    <!--#########################-->
                    <tr
                      v-for="(object, index) in dates"
                      :key="(index + 1) * Math.random()"
                      class="relative flex even:bg-gray-900 even:bg-opacity-40"
                    >
                      <template v-for="Translation in object.translations">
                        <td
                          v-for="(parameter, key2, index2) in Translation.title"
                          :key="(index2 + 1) * Math.random()"
                          class="max-w-[240px] flex-1 truncate whitespace-nowrap px-6 py-4 border-r-[2px] border-black"
                        >
                          {{ parameter }}
                        </td>
                      </template>

                      <template v-for="Translation in object.translations">
                        <td
                          v-for="(parameter, key, index2) in Translation.text"
                          :key="(index2 + 1) * Math.random()"
                          class="max-w-[240px] flex-1 truncate whitespace-nowrap px-6 py-4 border-r-[2px] border-black"
                        >
                          {{ parameter }}
                        </td>
                      </template>

                      <td
                        v-if="object.number !== undefined"
                        class="max-w-[240px] flex-1 truncate whitespace-nowrap px-6 py-4"
                      >
                        {{ object.number }}
                      </td>
                      <td
                        v-if="object.mail !== undefined"
                        class="max-w-[240px] flex-1 truncate whitespace-nowrap px-6 py-4"
                      >
                        {{ object.mail }}
                      </td>

                      <td
                        v-if="object.image_path !== undefined"
                        class="max-w-[240px] flex-1 whitespace-nowrap border-r-[2px] border-black"
                      >
                        <img
                          class="max-w-[240px] max-h-[135px]"
                          :src="`${imgURL}${object.image_path}-700.jpg`"
                          alt=""
                        />
                      </td>

                      <td
                        v-if="object.position !== undefined"
                        class="max-w-[240px] flex-1 truncate whitespace-nowrap px-6 py-4 border-r-[2px] border-black"
                      >
                        {{ object.position }}
                      </td>

                      <td
                        v-if="object.video_path !== undefined"
                        class="max-w-[240px] min-w-[140px] w-[240px] w-full px-6 flex flex-1 justify-center border-r-[2px] border-black"
                      >
                        <video ref="Video" class="w-[240px] h-[135px]" controls>
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
                        class="px-6 py-4 text-right flex flex-1 justify-start"
                      >
                        <!-- <a
                          @click.prevent="createForm(object)"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >Create
                        </a> -->
                        <div
                          class="min-w-[120px] max-w-[240px] flex justify-around"
                        >
                          <a
                            @click.prevent="editForm(object)"
                            class="font-bold text-xl text-blue-900 dark:text-blue-500 hover:underline cursor-pointer"
                            >Edit
                          </a>
                          <a
                            v-if="createAndDelete"
                            @click.prevent="deleteItem(deleteURL, object)"
                            href=""
                            class="font-bold text-xl text-red-900 dark:text-red-500 hover:underline cursor-pointer"
                            >Delite</a
                          >
                        </div>
                      </td>
                    </tr>

                    <!--#########################-->
                    <!--#########################-->
                    <!--#########################-->

                    <!-- <tr class="even:bg-gray-700 relative">
                        <th
                          scope="row"
                          class="truncate  px-6 py-4 font-medium text-white whitespace-nowrap"
                        >
                          Apple MacBook Pro 17" Apple MacBook Pro 17"Apple
                          MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro
                          17"
                        </th>
                        <td class=" px-6 py-4">Sliver</td>
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

    <ModelForm v-if="modelForm" @closeModelForm="closeModelForm" />
  </div>
</template>

<script>
//

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
      createAndDelete: '',

      //
      nameFocus: '',
      //

      namesArray: [
        //Header
        {
          title: ' Header ',
          href: 'Homepage',
          id: 1,
          icon: 'M22 17.5C22 19.9853 19.9853 22 17.5 22L5.5 22C3.01472 22 1 19.9853 1 17.5L1 5.5C1 3.01472 3.01472 0.999998 5.5 0.999998L17.5 1C19.9853 1 22 3.01472 22 5.5L22 17.5ZM17.5 23C20.5376 23 23 20.5376 23 17.5L23 5.5C23 2.46243 20.5376 -2.15273e-07 17.5 -4.80825e-07L5.5 -1.5299e-06C2.46244 -1.79545e-06 1.79545e-06 2.46243 1.5299e-06 5.5L4.80825e-07 17.5C2.15273e-07 20.5376 2.46243 23 5.5 23L17.5 23ZM16 5.5L16 6.5L17 6.5L17 5.5C17 4.67157 16.3284 4 15.5 4L7.5 4C6.67158 4 6 4.67157 6 5.5L6 6.5L7 6.5L7 5.5C7 5.22386 7.22386 5 7.5 5L15.5 5C15.7761 5 16 5.22386 16 5.5Z',

          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              createAndDelete: true,
              title: 'Home',
              link: 'get-header/home',
              editingLink: 'save-header/home',
              creatingLink: 'add-header/home',
              deleteLink: 'delete-header/home',
            },
            {
              createAndDelete: true,
              title: 'About',
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
              createAndDelete: true,
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
              createAndDelete: true,
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
              createAndDelete: true,
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
          id: 1,
          icon: 'M10.307 0.605324C10.1264 0.464892 9.87358 0.464892 9.69303 0.605324L0.69303 7.60532C0.571236 7.70005 0.5 7.8457 0.5 8V19C0.5 19.663 0.763392 20.2989 1.23223 20.7678C1.70107 21.2366 2.33696 21.5 3 21.5H7H13H17C17.663 21.5 18.2989 21.2366 18.7678 20.7678C19.2366 20.2989 19.5 19.663 19.5 19V8C19.5 7.8457 19.4288 7.70005 19.307 7.60532L10.307 0.605324ZM13.5 20.5H17C17.3978 20.5 17.7794 20.342 18.0607 20.0607C18.342 19.7794 18.5 19.3978 18.5 19V8.24454L10 1.63343L1.5 8.24454V19C1.5 19.3978 1.65804 19.7794 1.93934 20.0607C2.22064 20.342 2.60218 20.5 3 20.5H6.5V11C6.5 10.7239 6.72386 10.5 7 10.5H13C13.2761 10.5 13.5 10.7239 13.5 11V20.5ZM7.5 20.5V11.5H12.5V20.5H7.5Z',

          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              createAndDelete: false,
              title: ' Topics',
              link: 'get-home/topics',
              editingLink: 'save-home/topics',
              creatingLink: 'add-home/topics',
            },
            {
              createAndDelete: false,
              title: ' Topic title',
              link: 'get-topic-title',
              editingLink: 'save-topic-title',
            },

            {
              createAndDelete: false,
              title: ' Strategy',
              link: 'get-home/faciliti',
              editingLink: 'save-home/faciliti',
              creatingLink: 'add-home/faciliti',
            },
            {
              createAndDelete: false,
              title: ' Strategy-images',
              link: 'get-home/faciliti-image',
              editingLink: 'save-home/faciliti-image',
              creatingLink: 'add-home/faciliti-image',
              deleteLink: 'delete-home/faciliti-image',
            },
            {
              createAndDelete: true,
              title: ' Sliders',
              link: 'get-home/sliders',
              editingLink: 'save-home/sliders',
              creatingLink: 'add-home/sliders',
              deleteLink: 'delete-home/sliders',
            },
            {
              createAndDelete: false,
              title: ' Map',
              link: 'get-home/map',
              editingLink: 'save-home/map',
              creatingLink: 'add-home/map',
            },
            {
              createAndDelete: false,
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
          id: 2,
          icon: 'M1.5 3.44444C1.5 2.37056 2.37056 1.5 3.44444 1.5H20.5556C21.6294 1.5 22.5 2.37056 22.5 3.44444V20.5556C22.5 21.6294 21.6294 22.5 20.5556 22.5H3.44444C2.37056 22.5 1.5 21.6294 1.5 20.5556V3.44444ZM3.44444 0.5C1.81827 0.5 0.5 1.81827 0.5 3.44444V20.5556C0.5 22.1817 1.81827 23.5 3.44444 23.5H20.5556C22.1817 23.5 23.5 22.1817 23.5 20.5556V3.44444C23.5 1.81827 22.1817 0.5 20.5556 0.5H3.44444ZM5 5.5C5 5.22386 5.22386 5 5.5 5H9.37891C10.2153 5 11.0053 5.3694 11.579 6.00647C11.7247 6.16824 11.8536 6.34402 11.9648 6.53068C12.0761 6.34402 12.205 6.16824 12.3507 6.00647C12.9244 5.3694 13.7144 5 14.5508 5H18.4297C18.7058 5 18.9297 5.22386 18.9297 5.5V16.2684C18.9297 16.5445 18.7058 16.7684 18.4297 16.7684H13.9043C13.5404 16.7684 13.1794 16.9284 12.9044 17.2338C12.6282 17.5405 12.4652 17.9667 12.4648 18.4207V18.4221C12.4648 18.6982 12.241 18.9221 11.9648 18.9221C11.6887 18.9221 11.4648 18.6982 11.4648 18.4221V18.4207C11.4645 17.9667 11.3015 17.5405 11.0252 17.2338C10.7503 16.9284 10.3892 16.7684 10.0254 16.7684H5.5C5.22386 16.7684 5 16.5445 5 16.2684V5.5ZM10.8359 6.67565C11.2336 7.11728 11.4648 7.72646 11.4648 8.37124V8.37157V16.279C11.054 15.9527 10.552 15.7684 10.0254 15.7684H6V6H9.37891C9.91422 6 10.4397 6.23568 10.8359 6.67565ZM13.9043 15.7684C13.3777 15.7684 12.8757 15.9527 12.4648 16.279V8.37157C12.4648 7.72666 12.696 7.11736 13.0938 6.67565C13.49 6.23568 14.0155 6 14.5508 6H17.9297V15.7684H13.9043Z',
          active: false,
          array: [
            {
              createAndDelete: false,
              title: ' About Texts ',
              link: 'get-about',
              editingLink: 'save-about',
              creatingLink: 'add-about',
            },
            {
              createAndDelete: false,
              title: ' About Images ',
              link: 'get-about-image',
              editingLink: 'save-about-image',
              creatingLink: 'add-about-image',
            },
          ],
        },
        //Products
        // {
        //   title: " Products ",
        //   href: "Servicepage",
        //   id: 3,
        //   icon: "M1.5 3.44444C1.5 2.37056 2.37056 1.5 3.44444 1.5H20.5556C21.6294 1.5 22.5 2.37056 22.5 3.44444V20.5556C22.5 21.6294 21.6294 22.5 20.5556 22.5H3.44444C2.37056 22.5 1.5 21.6294 1.5 20.5556V3.44444ZM3.44444 0.5C1.81827 0.5 0.5 1.81827 0.5 3.44444V20.5556C0.5 22.1817 1.81827 23.5 3.44444 23.5H20.5556C22.1817 23.5 23.5 22.1817 23.5 20.5556V3.44444C23.5 1.81827 22.1817 0.5 20.5556 0.5H3.44444ZM8.49149 6C8.34306 6 8.20231 6.06594 8.10731 6.17999L6.12063 8.56502C6.04544 8.65252 6 8.76632 6 8.89073V8.89081V17.2586C6 17.7262 6.20676 18.1626 6.5543 18.4755C6.90011 18.7868 7.35888 18.954 7.82766 18.954H17.1213C17.5901 18.954 18.0488 18.7868 18.3946 18.4755C18.7422 18.1626 18.9489 17.7262 18.9489 17.2586V8.89081V8.89073C18.9489 8.76631 18.9035 8.6525 18.8283 8.56501L16.8416 6.17999C16.7466 6.06594 16.6059 6 16.4574 6H8.49149ZM17.3816 8.39073L16.2232 7H8.72574L7.56729 8.39073H17.3816ZM7 9.39073V17.2586C7 17.4251 7.07299 17.5969 7.22342 17.7323C7.37559 17.8693 7.5922 17.954 7.82766 17.954H17.1213C17.3567 17.954 17.5733 17.8693 17.7255 17.7323C17.8759 17.5969 17.9489 17.4251 17.9489 17.2586V9.39073H7ZM9.82031 10.7815C10.0965 10.7815 10.3203 11.0053 10.3203 11.2815C10.3203 11.765 10.5332 12.2408 10.9326 12.6004C11.3337 12.9616 11.8881 13.1723 12.4756 13.1723C13.0632 13.1723 13.6175 12.9616 14.0187 12.6004C14.4181 12.2408 14.631 11.765 14.631 11.2815C14.631 11.0053 14.8548 10.7815 15.131 10.7815C15.4071 10.7815 15.631 11.0053 15.631 11.2815C15.631 12.0661 15.2843 12.8065 14.6878 13.3436C14.093 13.8791 13.2965 14.1723 12.4756 14.1723C11.6547 14.1723 10.8583 13.8791 10.2635 13.3436C9.66695 12.8065 9.32031 12.0661 9.32031 11.2815C9.32031 11.0053 9.54417 10.7815 9.82031 10.7815Z",

        //   active: false,
        //   array: [
        //     {
        //       createAndDelete: true,
        //       title: "Products",
        //       link: "get-product",
        //       editingLink: "save-product",
        //       creatingLink: "add-product",
        //       deleteLink: "delete-product",
        //     },
        //   ],
        // },
        //Contactpage

        // get-contact
        // get-home/contact
        {
          title: ' Contacts ',
          href: 'Contactpage',
          id: 5,
          icon: 'M1.47852 3.31619C1.47852 2.301 2.30149 1.47803 3.31668 1.47803H19.6838C20.699 1.47803 21.522 2.301 21.522 3.31619V19.6833C21.522 20.6985 20.699 21.5215 19.6838 21.5215H3.31668C2.30149 21.5215 1.47852 20.6985 1.47852 19.6833V3.31619ZM3.31668 0.478027C1.7492 0.478027 0.478516 1.74872 0.478516 3.31619V19.6833C0.478516 21.2508 1.7492 22.5215 3.31668 22.5215H19.6838C21.2513 22.5215 22.522 21.2508 22.522 19.6833V3.31619C22.522 1.74872 21.2513 0.478027 19.6838 0.478027H3.31668ZM6.16579 5.79054C6.51941 5.44296 6.86819 5.30456 7.21008 5.30456C7.32794 5.30456 7.44124 5.33 7.53715 5.37597L7.53712 5.37602L7.54398 5.37918C7.64411 5.42533 7.72598 5.49025 7.79163 5.58493L7.79161 5.58495L7.79494 5.58965L9.35067 7.77913L9.35066 7.77913L9.3527 7.78196C9.45526 7.92419 9.52124 8.04388 9.56381 8.14777L9.56375 8.1478L9.56702 8.15542C9.60784 8.25052 9.62036 8.32339 9.62036 8.36665C9.62036 8.42653 9.60361 8.49813 9.55262 8.58178L9.54841 8.58869L9.54442 8.59573C9.48522 8.70031 9.38901 8.82555 9.25074 8.96361L9.25067 8.96354L9.24395 8.97051L8.73703 9.49666C8.56451 9.67106 8.4871 9.88738 8.4871 10.1142C8.4871 10.2152 8.50055 10.3032 8.52219 10.3897L8.52911 10.4173L8.53914 10.444C8.55226 10.4789 8.56543 10.51 8.57379 10.5296L8.5738 10.5297L8.57617 10.5353C8.58416 10.5541 8.58628 10.5597 8.5866 10.5605L8.58665 10.5606L8.6007 10.6027L8.62206 10.6418C8.76644 10.9061 8.99914 11.2238 9.30304 11.5824L9.30301 11.5824L9.30665 11.5866C9.6135 11.9407 9.94253 12.3035 10.3002 12.6675L10.3001 12.6676L10.3069 12.6742C10.673 13.033 11.0313 13.3704 11.3997 13.6827L11.4003 13.6833C11.7638 13.9904 12.0828 14.2158 12.3544 14.3594L12.3779 14.3718L12.4026 14.3817C12.4061 14.3831 12.4136 14.3863 12.4353 14.3963L12.4406 14.3987L12.4407 14.3987C12.4589 14.4071 12.4845 14.4188 12.5121 14.4306L12.5226 14.4351L12.5334 14.4392C12.6601 14.4866 12.7774 14.4977 12.8764 14.4977C13.1291 14.4977 13.3409 14.4005 13.5032 14.2392L13.5046 14.2377L14.0119 13.7378L14.0119 13.7378L14.0143 13.7355C14.1617 13.5883 14.2818 13.4986 14.3748 13.4502L14.3894 13.4426L14.4035 13.434C14.4892 13.3819 14.5546 13.3661 14.6199 13.3661C14.6741 13.3661 14.7441 13.3769 14.8399 13.416C14.9445 13.4588 15.0662 13.5255 15.2134 13.6252L17.4288 15.1957L17.4287 15.1957L17.4336 15.1991C17.5401 15.2727 17.5945 15.3426 17.6261 15.4111C17.6724 15.529 17.694 15.6305 17.694 15.7386C17.694 15.9045 17.6573 16.0793 17.5744 16.2546C17.4803 16.4536 17.3597 16.6396 17.2002 16.8153C16.9157 17.1282 16.6136 17.3427 16.2813 17.4787L16.2786 17.4798C15.9394 17.6209 15.5691 17.6959 15.1631 17.6959C14.558 17.6959 13.8937 17.5537 13.1727 17.247C12.44 16.9352 11.7017 16.513 10.9646 15.9772C10.2148 15.4303 9.50351 14.8245 8.82406 14.1527C8.15148 13.4745 7.5452 12.7648 7.00471 12.0237C6.47305 11.2855 6.05067 10.555 5.74596 9.83887C5.44539 9.12588 5.30273 8.4624 5.30273 7.84439C5.30273 7.44843 5.3726 7.07677 5.50828 6.73806L5.50829 6.73806L5.50933 6.73543C5.64162 6.39969 5.85292 6.08541 6.15813 5.79791L6.15821 5.79799L6.16579 5.79054ZM7.21008 4.30456C6.56118 4.30456 5.97248 4.5799 5.46862 5.07362C5.06535 5.45446 4.76848 5.88841 4.57947 6.36751C4.39364 6.8319 4.30273 7.33022 4.30273 7.84439C4.30273 8.61886 4.48186 9.4148 4.82483 10.2281L4.82545 10.2296C5.1643 11.0261 5.62668 11.8216 6.19417 12.6093L6.19416 12.6093L6.19586 12.6117C6.76785 13.3961 7.40799 14.1451 8.11577 14.8587L8.11575 14.8587L8.11918 14.8621C8.83393 15.5689 9.58384 16.2078 10.3756 16.7853L10.3762 16.7858C11.1679 17.3613 11.9718 17.8228 12.7813 18.1672C13.6026 18.5166 14.4001 18.6959 15.1631 18.6959C15.6954 18.6959 16.1963 18.5969 16.6615 18.4036C17.1466 18.2048 17.5681 17.8973 17.9404 17.4876L17.9407 17.4874C18.1701 17.2346 18.3445 16.9652 18.4784 16.6822C18.6235 16.3754 18.694 16.0547 18.694 15.7386C18.694 15.4744 18.6363 15.2435 18.5509 15.0304L18.5477 15.0225L18.5443 15.0147C18.4284 14.7516 18.2423 14.543 18.0049 14.3783L15.7875 12.8064L15.7876 12.8063L15.7792 12.8006C15.593 12.6742 15.4075 12.5677 15.218 12.4903C15.0187 12.4089 14.8205 12.3661 14.6199 12.3661C14.3556 12.3661 14.1171 12.4408 13.8982 12.571C13.6886 12.6828 13.4922 12.8438 13.3089 13.0267L13.3077 13.0279L12.8448 13.4839C12.8333 13.4787 12.8189 13.4721 12.8031 13.4653C12.6202 13.3661 12.3687 13.1923 12.0461 12.9197C11.7049 12.6304 11.3669 12.3128 11.0102 11.9633C10.6724 11.6193 10.3593 11.2743 10.0641 10.9338C9.79457 10.6155 9.61675 10.3681 9.51631 10.1922C9.50932 10.1744 9.50286 10.1591 9.49814 10.148L9.96086 9.6677C10.1409 9.48746 10.2967 9.29488 10.4108 9.09523C10.5448 8.87271 10.6204 8.62541 10.6204 8.36665C10.6204 8.15692 10.5666 7.94999 10.4876 7.76485C10.4098 7.57592 10.3023 7.3893 10.1649 7.19855L8.61164 5.01258C8.43695 4.76163 8.21232 4.58676 7.96593 4.47256C7.72748 4.35894 7.46652 4.30456 7.21008 4.30456Z',
          active: false,
          array: [
            {
              createAndDelete: false,
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
          id: 1,

          //
          icon: 'M3.41059 1.58252C2.39871 1.58252 1.57812 2.40314 1.57812 3.41579V19.7487C1.57812 20.6954 2.29527 21.4743 3.21543 21.5717L15.887 8.8957C15.9808 8.80189 16.108 8.74919 16.2407 8.74919C16.3733 8.74919 16.5005 8.80189 16.5943 8.8957L21.5703 13.8735V3.41579C21.5703 2.40314 20.7497 1.58252 19.7378 1.58252H3.41059ZM22.5703 15.0433V3.41579C22.5703 1.85118 21.3023 0.58252 19.7378 0.58252H3.41059C1.8461 0.58252 0.578125 1.85118 0.578125 3.41579V19.7487C0.578125 21.3086 1.8385 22.5744 3.39652 22.582C3.40653 22.5823 3.41654 22.5823 3.42655 22.582H19.7378C21.3023 22.582 22.5703 21.3133 22.5703 19.7487V15.1214C22.5723 15.0954 22.5723 15.0693 22.5703 15.0433ZM21.5703 15.2879L16.2407 9.95642L4.61913 21.582H19.7378C20.7497 21.582 21.5703 20.7614 21.5703 19.7487V15.2879ZM7.49154 6.24905C6.8017 6.24905 6.24219 6.80851 6.24219 7.499C6.24219 8.1895 6.8017 8.74896 7.49154 8.74896C8.18137 8.74896 8.74088 8.1895 8.74088 7.499C8.74088 6.80851 8.18137 6.24905 7.49154 6.24905ZM5.24219 7.499C5.24219 6.25655 6.24909 5.24905 7.49154 5.24905C8.73398 5.24905 9.74088 6.25655 9.74088 7.499C9.74088 8.74146 8.73398 9.74896 7.49154 9.74896C6.24909 9.74896 5.24219 8.74146 5.24219 7.499Z',
          //
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              createAndDelete: true,
              title: ' Image',
              image: false,
              link: 'get-gallery/image',
              editingLink: 'save-gallery',
              creatingLink: 'add-gallery',
              deleteLink: 'delete-gallery',
            },
            {
              createAndDelete: true,
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
          id: 1,
          //
          icon: 'M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5H18C20.4853 1.5 22.5 3.51472 22.5 6V18C22.5 20.4853 20.4853 22.5 18 22.5H6C3.51472 22.5 1.5 20.4853 1.5 18V6ZM6 0.5C2.96243 0.5 0.5 2.96243 0.5 6V18C0.5 21.0376 2.96243 23.5 6 23.5H18C21.0376 23.5 23.5 21.0376 23.5 18V6C23.5 2.96243 21.0376 0.5 18 0.5H6ZM7.5 18V17H6.5V18C6.5 18.8284 7.17157 19.5 8 19.5H16C16.8284 19.5 17.5 18.8284 17.5 18V17H16.5V18C16.5 18.2761 16.2761 18.5 16 18.5H8C7.72386 18.5 7.5 18.2761 7.5 18Z',
          // fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5H20C22.4853 1.5 24.5 3.51472 24.5 6V20C24.5 22.4853 22.4853 24.5 20 24.5H6C3.51472 24.5 1.5 22.4853 1.5 20V6ZM6 0.5C2.96243 0.5 0.5 2.96243 0.5 6V20C0.5 23.0376 2.96243 25.5 6 25.5H20C23.0376 25.5 25.5 23.0376 25.5 20V6C25.5 2.96243 23.0376 0.5 20 0.5H6ZM6.5 20V18H5.5V20C5.5 20.8284 6.17157 21.5 7 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20V18H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5H7C6.72386 20.5 6.5 20.2761 6.5 20Z"
          //
          active: false,
          array: [
            // { title: "Baş sahypanyň slideri", link: "get-language" },
            // { title: "Baş sahypanyň tekstleri", link: "get-home" },
            {
              createAndDelete: false,
              title: ' FooterText',

              link: 'get-footer/text',
              editingLink: 'save-footer/text',
              creatingLink: 'add-footer/text',
              deleteLink: 'delete-footer/text',
            },
            {
              createAndDelete: true,
              title: ' Address ',

              link: 'get-footer/address',
              editingLink: 'save-footer/address',
              creatingLink: 'add-footer/address',
              deleteLink: 'delete-footer/address',
            },

            {
              createAndDelete: true,
              title: ' Phone number ',

              link: 'get-footer/phone',
              editingLink: 'save-footer/phone',
              creatingLink: 'add-footer/phone',
              deleteLink: 'delete-footer/phone',
            },
            {
              createAndDelete: true,
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
      // dates: "",
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
          ],
        },
      ],
      datesArray: '',
      //
      getLink: '',
    }
  },

  async mounted() {
    //
    await this.takeToken({ Token: this.$auth.strategy.token.get() })

    // await this.fetchDates({ changingURL: "get-header/home" });
    // console.log("fetchDates =>");

    // this.dates = await this.getDates;
    // console.log("this.dates =>", this.dates);
  },
  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
    ...mapGetters('admin', ['getDates']),
    takeArr() {
      this.dates = this.getDates
      console.log('takeArr =>', this.dates)
    },
  },
  methods: {
    ...mapActions('admin', [
      'takeToken',
      'fetchDates',
      'addFullObject',
      'addEmptyObject',
      'sendDates',
      'selectLinks',
      // "selectItemLinks",
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
        // console.log("loggedIn", this.loggedIn);
        // console.log("SUKA");
        this.createAndDelete = param.createAndDelete
        //
        this.deleteURL = param.deleteLink
        console.log('deleteLink =>', param.deleteLink)

        this.creatingLink = param.creatingLink
        console.log('creatingLink =>', param.creatingLink)

        this.editingLink = param.editingLink
        console.log('editingLink =>', param.editingLink)

        // await this.selectItemLinks({ Item: param });
        // console.log("selectItemLinks =>");

        await this.fetchDates({ changingURL: param.link })
        console.log('fetchDates =>')

        /*######################*/

        this.selectLinks({ Link: param.creatingLink })

        this.getLink = param.link

        /*######################*/

        await this.addEmptyObject()

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
      this.selectLinks({ Link: this.creatingLink })
      this.addEmptyObject()
    },

    async deleteItem(deleteURL, object) {
      let res = await this.sendDates({
        changingURL: deleteURL,
        Dates: object,
      })

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

      this.$nextTick(async () => {
        await this.fetchDates({ changingURL: this.getLink })
        console.log('fetchDates =>')

        this.dates = await this.getDates
        console.log('this.dates =>', this.dates)

        // await this.takeArr;
      })
    },

    async logOut() {
      await this.$auth.logout('/login')
      this.$router.push('/login')
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
