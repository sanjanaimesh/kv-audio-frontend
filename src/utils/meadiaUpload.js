import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bXN3Z2V1Y3BoZG11bXplY3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMjQwNDUsImV4cCI6MjA3NDgwMDA0NX0.9oBDZhvizdGJmi6sMGAX2L-SoEy6M6jAazWnzQpaDhk"
const supabase_url = "https://pxmswgeucphdmumzecrb.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function mediaUpload(file) {
    if(file == null){
        reject("No file")
    }
    return new Promise((resolve, reject) => {
        const timestamp = new Date().getTime();
        const filename = timestamp + file.name

        supabase.storage.from("images").upload(filename, file, {
            cacheControl: '3600',
            upsert: false,
        }).then(() => {

            const publicUrl = supabase.storage.from("images").getPublicUrl(filename).data.publicUrl;
            resolve(publicUrl)
            console.log(publicUrl.data)
        }).catch(()=>{
            reject("Error uploading file")
        })
    });


} 