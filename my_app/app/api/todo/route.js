import Todo from "@/lib/config/model";
import ConnectToDb from "@/lib/config/utili";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await ConnectToDb();
        const allTodoData = await Todo.find({});
        console.log("Get Method Call")
        if (allTodoData) {
            return NextResponse.json({
                "success": true,
                "data": allTodoData,
                "msg": "check data"
            })
        }
        else {
            return NextResponse.json({
                "success": false,
                "msg": "no data available"
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            "success": false,
            "msg": "Something went worng"
        })
    }
}






export async function POST(req) {
    try {
        await ConnectToDb();
        const extingData = await req.json();
        const newlyCreateTodo = await Todo.create(extingData);
        if (newlyCreateTodo) {
            return NextResponse.json({
                "success": true,
                "msg": "successfuly created..."
            })
        }
        else {
            return NextResponse.json({
                "success": false,
                "msg": "already present try again..."
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            "success": false,
            "msg": "Something went worng"
        })
    }
}


export async function DELETE({searchParams}) {
 console.log(searchParams)
 return NextResponse.json({
                "success": true,
               "msg": searchParams
            })
    // await ConnectToDb();
    // const { searchParams } = new URL(req.url);
    // const getId = searchParams("id");
    // try {
    
    //     if (!getId) {
    //         return NextResponse.json({
    //             "success": false,
    //             "msg": "id is required"
    //         })
    //     }
    //     const deletedItem = await Todo.findByIdAndDelete(getId);
    //     if (deletedItem) {
    //         return NextResponse.json({
    //             "success": true,
    //             "msg": "delted succefuly.."
    //         })
    //     }

    //     else {
    //         return NextResponse.json({
    //             "success": false,
    //             "msg": "jani na ki hoche..."
    //         })
    //     }

    // } catch (error) {
    //     console.log(error)
    //     return NextResponse.json({
    //         "success": false,
    //         "msg":getId
    //     })
    // }
}