const deCache=!1,CACHE_NAME="pwa-cache";self.addEventListener("activate",(e=>{const t=[CACHE_NAME];e.waitUntil(caches.keys().then((e=>Promise.all(e.map((a=>t.includes(a)?e:(console.log("Deleting cache:",a),caches.delete(a))))))))})),self.addEventListener("install",(e=>{})),self.addEventListener("fetch",(e=>{}));