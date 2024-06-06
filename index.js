const container = document.getElementById("container");
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
let arr = [];// 测试数组
let bool = true;// 默认数组是有序的

// 0到1000的数组
for (let i = 0; i < 1000; i++) {
    arr[i] = i + 1;
}

// console.log(arr);
// console.log(container.children);

let main = () => {// 主函数
    // 将数组图形化
    printArr(arr);
}
// 初始化
main();

// 事件绑定
bt1.onclick = () => {
    // 打乱数组
    randomArr(arr);
}
bt2.onclick = () => {
    if (!bool) {
        // 冒泡排序
        MPPX(arr);
    } else {
        alert("数组是有序的");
    }
}
bt3.onclick = () => {
    if (!bool) {
        // 插入排序
        CRPX(arr);
    } else {
        alert("数组是有序的");
    }
}

// 可以优化成修改item集合

// 将数组图形化
function printArr(arr) {
    // 非首次图形化要先删除原先存在的item
    if (container.children[0]) {// 若存在子节点
        while (container.children[0]) {
            container.removeChild(container.children[container.children.length - 1]);
        }
        // 将数组图形化
        for (let i = 0; i < arr.length; i++) {
            let item = document.createElement("div");
            item.classList.add("item");
            item.style.setProperty("--height", `${arr[i] / 10}%`);
            if (bool) {//如果有序则改变颜色
                item.style.backgroundColor = "rgb(94, 94, 255)";
            }
            container.appendChild(item);
        }
    } else {
        // 将数组图形化
        for (let i = 0; i < arr.length; i++) {
            let item = document.createElement("div");
            item.classList.add("item");
            item.style.setProperty("--height", `${arr[i] / 10}%`);
            if (bool) {//如果有序则改变颜色
                item.style.backgroundColor = "rgb(94, 94, 255)";
            }
            container.appendChild(item);
        }
    }
}

// 打乱数组
function randomArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = randomNum();// 获取一个0到999的随机数
        // 交换随机到的数值
        let root = arr[i];
        arr[i] = arr[num];
        arr[num] = root;
        // await sleep(1);
        // printArr(arr);
    }
    bool = false;// 数组无序
    // 将数组图形化
    printArr(arr);
}
// 获得一个0到999的随机数
function randomNum() {
    let random = parseInt(Math.random() * 1000);// 随机数取整
    while (random == 1000) {// 当随机到1000时重新随机
        random = parseInt(Math.random() * 1000);
    }
    return random;
}

// 异步模拟线程休眠
function sleep(timer) {
    return new Promise((resolve) => {
        // timer时间后得到promise的结果
        setTimeout(resolve, timer);
    })
}

// 冒泡排序(异步)
async function MPPX(arr) {
    // 排序时不能打乱
    bt1.onclick = () => {
        alert("正在还原数组，请稍后...");
    }
    bt2.onclick = () => {
        alert("正在还原数组，请稍后...");
    }
    bt3.onclick = () => {
        alert("正在还原数组，请稍后...");
    }

    // 排序主体
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            // setTimeout(()=>{
            //     if(arr[j] > arr[j+1]){
            //         let root = arr[j];
            //         arr[j] = arr[j+1];
            //         arr[j+1] = root;
            //         // console.log("交换");
            //     }
            //     // 每次交换后将数组图形化
            //     printArr(arr);
            // },1*j);//给每次交换设置动态定时器（不合理，数据太多，页面崩溃）

            if (arr[j] > arr[j + 1]) {
                let root = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = root;
                // console.log("交换");
            }
        }
        // 每次将最大的数放到原位后将数组图形化
        printArr(arr);
        await sleep(10);//休眠10ms
    }

    // 排序结束恢复打乱和排序功能
    bt1.onclick = () => {
        // 打乱数组
        randomArr(arr);
    }
    bt2.onclick = () => {
        if (!bool) {
            // 排序
            MPPX(arr);
        } else {
            alert("数组是有序的");
        }
    }
    bt3.onclick = () => {
        if (!bool) {
            // 插入排序
            CRPX(arr);
        } else {
            alert("数组是有序的");
        }
    }

    bool = true;// 数组有序
    printArr(arr);
    // alert("排序完成！");
}
// 插入排序（异步）
async function CRPX(arr) {
    // 排序时不能打乱
    bt1.onclick = () => {
        alert("正在还原数组，请稍后...");
    }
    bt2.onclick = () => {
        alert("正在还原数组，请稍后...");
    }
    bt3.onclick = () => {
        alert("正在还原数组，请稍后...");
    }

    // 排序主体
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // 将比当前元素大的元素向右移动
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 将当前元素插入到合适的位置
        arr[j + 1] = current;
        // 每次将最大的数放到原位后将数组图形化
        printArr(arr);
        await sleep(10);//休眠10ms
    }

    // 排序结束恢复打乱和排序功能
    bt1.onclick = () => {
        // 打乱数组
        randomArr(arr);
    }
    bt2.onclick = () => {
        if (!bool) {
            // 排序
            MPPX(arr);
        } else {
            alert("数组是有序的");
        }
    }
    bt3.onclick = () => {
        if (!bool) {
            // 插入排序
            CRPX(arr);
        } else {
            alert("数组是有序的");
        }
    }

    bool = true;// 数组有序
    printArr(arr);
    // alert("排序完成！");
}