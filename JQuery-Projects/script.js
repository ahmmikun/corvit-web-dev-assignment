
        $(document).ready(function(){
            $("#add").click(function(){
                let task = $("#task").val();
                if(task !== ""){
                    $("#list").append(
                        "<li>" + task + " <span class='delete'>❌</span></li>"
                    );
                    $("#task").val("");
                }
            });

            $(document).on("click", ".delete", function(){
                $(this).parent().remove();
            });
        });
