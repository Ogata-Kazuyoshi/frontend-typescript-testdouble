import {expect, test, vi} from "vitest";
import {render} from "@testing-library/react";
import {Header} from "../screens/Header.tsx";

vi.mock("../screens/Header.tsx")
describe('App.tsxのテスト',()=>{
    test("AppがレンダリングされるとHeaderが呼ばれる",()=>{
        render(<Header />)

        expect(Header).toHaveBeenCalled()

    })
})