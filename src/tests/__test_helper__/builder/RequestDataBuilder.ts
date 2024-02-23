import {RequestData} from "../../../model/Type.ts";

export class RequestDataBuilder implements RequestData {
    name = ""
    age = 0
    remark = ""
    setName(name: string) {
        this.name = name
        return this
    }
    setAge(age: number) {
        this.age = age
        return this
    }
    setRemark(remark: string) {
        this.remark = remark
        return this
    }

}