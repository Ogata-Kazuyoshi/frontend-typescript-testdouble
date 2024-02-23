import {expect, test} from "vitest";
import {render,screen} from "@testing-library/react";
import {Header} from "../../screens/Header.tsx";
import {userEvent} from "@testing-library/user-event";
import {SpyUserRepository} from "../repository/SpyUserRepository.ts";


describe('Header.tsxのテスト',()=>{
    test("Headerがレンダリングされると投稿ボタンが表示される",()=>{
        render(<Header />)

        expect(screen.getByRole('button',{name : '投稿'})).toBeInTheDocument()
    })

    test("投稿ボタンが表示されるとRepository層のsubmitメソッドが呼ばれる",async ()=>{

        const spyUserRepository = new SpyUserRepository()

        render(<Header userRepository={spyUserRepository}/>)

        await userEvent.click(screen.getByRole('button',{name : '投稿'}))

        expect(spyUserRepository.submit_isCalled).toBeTruthy()
    })
})