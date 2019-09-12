import * as mysql from 'mysql';
import config from '../config';

export const connection = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if(err) reject(err)
            resolve(results)
        })
    })
}

import blogs from './queries/blogs'
import blogtags from './queries/blogtags'
import tags from './queries/tags'

export default {
    blogs,
    blogtags,
    tags
}