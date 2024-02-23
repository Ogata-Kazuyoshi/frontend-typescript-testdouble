import {RequestData} from "../../../model/Type.ts";

export class RequestDataBuilder implements RequestData {
    name = ""
    age = 0
    remark = ""
    setName(name: string) {
        this.name = name
    }
    setAge(age: number) {
        this.age = age
    }
    setRemark(remark: string) {
        this.remark = remark
    }

}