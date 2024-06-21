import Todo from "@/lib/config/model";
import ConnectToDb from "@/lib/config/utili";
import { NextResponse } from "next/server";


export async function DELETE(request, { params }) {
   
    try {
        await ConnectToDb();
        const { id } = params

        if (!id) {
            return NextResponse.json({
                "success": false,
                "msg": "id is required"
            })
        }
        const deletedItem = await Todo.findByIdAndDelete(id);
        if (deletedItem) {
            return NextResponse.json({
                "success": true,
                "msg": "deleted succefuly.."
            })
        }

        else {
            return NextResponse.json({
                "success": false,
                "msg": "jani na ki hoche..."
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            "success": false,
            "msg":getId
        })
    }
}