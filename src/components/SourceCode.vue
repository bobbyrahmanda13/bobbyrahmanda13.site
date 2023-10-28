<template>
  <div>
    <div class="py-10">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row py-8 gap-4 overflow-y-auto max-h-screen"
      >
        <div
          v-for="repo in showRepos"
          :key="repo.id"
          class="rounded-lg bg-primary-black lg:p-4 p-3 transition duration-500 ease-in-out text-primary-gray hover:text-primary-white"
        >
          <div class="flex p-5 m-3 items-center shadow-xl rounded-md">
            <div class="flex flex-col">
              <div class="flex py-1">
                <a
                  class="hover:decoration-primary hover:decoration-2 hover:underline"
                  target="_blank"
                  :href="repo.html_url"
                  >{{ shortName(repo.name, 20) }}</a
                >
              </div>
              <div class="flex py-1">
                <span>{{ repo.language }}</span>
              </div>
              <div class="flex py-1">
                <span><span class="font-bold"></span> {{ formatDate(repo.pushed_at) }}</span>
              </div>

              <!-- <h2 class="text-white font-semibold">{{ repo.name }}</h2>
          <p class="text-gray-400 text-sm cursor-pointer">Visit Profile</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-xl mx-auto flex justify-center">
      <!-- Pagination -->
      <ul class="mx-auto flex items-center">
        <li class="relative" :disabled="page === 1">
         <!-- <li class="relative" :class="page === 1 ? 'md:invisible hidden ' : ''"> -->
          <button
            class="bg-primary mx-2 px-3 py-2 text-primary-white font-bold rounded-lg"
            @click="prevPage"
          >
            Previous
          </button>
        </li>
        <li class="font-bold m-5 relative">{{ page }} of {{ lastPage }}</li>
        <li class="relative" :disabled="page === lastPage">
           <!-- <li class="relative" :class="page === lastPage ? 'md:invisible hidden' : ''"> -->
          <button 
            class="bg-primary mx-2 px-3 py-2 text-primary-white font-bold rounded-lg" 
            @click="nextPage"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  </div>

  <!--./Pagination -->
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

// get repo github
const repoGithub = ref([]);
const githubAPI = ref('https://api.github.com/users/bobbyrahmanda13/repos?page=');
const githubPage = ref(1);

onMounted(() => {
  fetchData();
});

// get data from github api
const fetchData = () => {
  try {
    axios.get(githubAPI.value + githubPage.value).then((response) => {
      repoGithub.value = response.data;
      //   console.log(repoGithub.value.length);
    });
  } catch (error) {
    console.log(error);
  }
};

// sort ascending or descending
const sortRepoGithub = computed(() => {
  return repoGithub.value.slice().sort((a, b) => {
    const date1 = new Date(a.pushed_at);
    const date2 = new Date(b.pushed_at);
    const result = date2 - date1;
    return result;
  });
});
// format date
const formatDate = (dateValue) => {
  let date = new Date(dateValue);
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleString(['ban', 'id'], options);
};

// pagination
const page = ref(1);
const perPage = ref(6);
let totalPages = repoGithub.value.length

const prevPage = () => {
  if(page.value > 1) {
  page.value--;
 fetchData();
  }
};
const nextPage = () => {
   if(page.value < lastPage.value) {
  page.value++;
 fetchData();
  }
};
const lastPage = computed(() => {
  let totPage = totalPages;
  let result = totPage / perPage.value;
  return Math.ceil(result);
});

const showRepos = computed(() => {
  let start = (page.value - 1) * perPage.value;
  let end = start + perPage.value;

  return sortRepoGithub.value.slice(start, end);
});

// short name

const shortName = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};


</script>
