import { uploadFileToAliOss } from 'file-utils-plus'

export const uploadFile = async ({
  file,
  fileName = '',
  path = '',
  argument
}: {
  file: File
  fileName: string
  path: string
  argument: Record<string, any>
}) => {
  try {
    return uploadFileToAliOss({
      file: file,
      path: `${path}`,
      baseUrl: '',
      options: {},
      argument: argument,
      fileName: fileName
    })
  } catch (error) {
    console.log('文件上传失败', error)
  }
}
