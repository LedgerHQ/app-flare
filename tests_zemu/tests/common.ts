import { IDeviceModel, DEFAULT_START_OPTIONS } from '@zondax/zemu'

import { resolve } from 'path'

export const APP_SEED = 'equip will roof matter pink blind book anxiety banner elbow sun young'

const APP_PATH_S = resolve('../app/output/app_s.elf')
const APP_PATH_X = resolve('../app/output/app_x.elf')
const APP_PATH_SP = resolve('../app/output/app_s2.elf')
const APP_PATH_ST = resolve('../app/output/app_stax.elf')

export const models: IDeviceModel[] = [
  { name: 'nanos', prefix: 'S', path: APP_PATH_S },
  { name: 'nanox', prefix: 'X', path: APP_PATH_X },
  { name: 'nanosp', prefix: 'SP', path: APP_PATH_SP },
  { name: 'stax', prefix: 'ST', path: APP_PATH_ST },
]

export const defaultOptions = {
  ...DEFAULT_START_OPTIONS,
  logging: true,
  custom: `-s "${APP_SEED}"`,
  X11: false,
}

export const txBlobExample = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0xab, 0x68, 0xeb, 0x1e, 0xe1, 0x42, 0xa0, 0x5c, 0xfe, 0x76, 0x8c, 0x36, 0xe1,
  0x1f, 0x0b, 0x59, 0x6d, 0xb5, 0xa3, 0xc6, 0xc7, 0x7a, 0xab, 0xe6, 0x65, 0xda, 0xd9, 0xe6, 0x38, 0xca, 0x94, 0xf7, 0x00, 0x00, 0x00, 0x02,
  0x3d, 0x9b, 0xda, 0xc0, 0xed, 0x1d, 0x76, 0x13, 0x30, 0xcf, 0x68, 0x0e, 0xfd, 0xeb, 0x1a, 0x42, 0x15, 0x9e, 0xb3, 0x87, 0xd6, 0xd2, 0x95,
  0x0c, 0x96, 0xf7, 0xd2, 0x8f, 0x61, 0xbb, 0xe2, 0xaa, 0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0xe8, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x7f, 0x67, 0x1c, 0x73, 0x0d, 0x48, 0x07, 0xc2, 0x9e,
  0xa1, 0x9b, 0x19, 0xa2, 0x3c, 0x70, 0x0b, 0x19, 0x8f, 0x8b, 0x51, 0x3d, 0x9b, 0xda, 0xc0, 0xed, 0x1d, 0x76, 0x13, 0x30, 0xcf, 0x68, 0x0e,
  0xfd, 0xeb, 0x1a, 0x42, 0x15, 0x9e, 0xb3, 0x87, 0xd6, 0xd2, 0x95, 0x0c, 0x96, 0xf7, 0xd2, 0x8f, 0x61, 0xbb, 0xe2, 0xaa, 0x00, 0x00, 0x00,
  0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6a, 0xcb, 0xd8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
  0x00, 0x01, 3, 85, 118, 137, 182, 146, 213, 18, 105, 110, 165, 183, 74, 230, 225, 34, 62, 126, 4, 138, 0x00, 0x00, 0x00, 0x02, 0x1c, 0x03,
  0x06, 0xe5, 0x8b, 0x75, 0x4e, 0xeb, 0x92, 0xe7, 0xa5, 0x79, 0xc5, 0x9a, 0x69, 0x33, 0x23, 0xcd, 0x99, 0x94, 0xa5, 0x94, 0x61, 0x62, 0x72,
  0x6f, 0x3b, 0x68, 0x0e, 0x9e, 0x48, 0x34, 0x00, 0x00, 0x00, 0x00, 0x3d, 0x9b, 0xda, 0xc0, 0xed, 0x1d, 0x76, 0x13, 0x30, 0xcf, 0x68, 0x0e,
  0xfd, 0xeb, 0x1a, 0x42, 0x15, 0x9e, 0xb3, 0x87, 0xd6, 0xd2, 0x95, 0x0c, 0x96, 0xf7, 0xd2, 0x8f, 0x61, 0xbb, 0xe2, 0xaa, 0x00, 0x00, 0x00,
  0x05, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x29, 0x71, 0x0d, 0xe0, 0x93, 0xe2,
  0xf4, 0x10, 0xb5, 0xa3, 0x5e, 0x2c, 0x60, 0x59, 0x38, 0x39, 0x2d, 0xa0, 0xde, 0x80, 0x2c, 0x74, 0xe2, 0x5d, 0x78, 0xd2, 0xbf, 0x11, 0x87,
  0xdc, 0x9a, 0xd6, 0x00, 0x00, 0x00, 0x00, 0x3d, 0x9b, 0xda, 0xc0, 0xed, 0x1d, 0x76, 0x13, 0x30, 0xcf, 0x68, 0x0e, 0xfd, 0xeb, 0x1a, 0x42,
  0x15, 0x9e, 0xb3, 0x87, 0xd6, 0xd2, 0x95, 0x0c, 0x96, 0xf7, 0xd2, 0x8f, 0x61, 0xbb, 0xe2, 0xaa, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x7a, 0x11, 0x9c, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00,
])
