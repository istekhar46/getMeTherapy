const cloud_name = import.meta.env.VITE_CLOUD_NAME
const upload_preset = import.meta.env.VITE_PRESET_NAME

const uploadToCloudinary = async (file) => {
    const uploadData = new FormData();

    uploadData.append('file', file)
    uploadData.append('upload_preset', upload_preset)
    uploadData.append('cloud_name',cloud_name)

    const result = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{
        method: 'post',
        body: uploadData,
    })

    const data = await result.json();
    return data ;
}

export default uploadToCloudinary ; 