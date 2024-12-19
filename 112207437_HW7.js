// 初始化狀態變數
let isEditing = false;

// 選取 DOM 元素
const nameDisplay = document.getElementById("name-display");
const editButton = document.getElementById("edit-name");
const addMusicButton = document.getElementById("add-music");
const musicForm = document.getElementById("music-form");
const musicGrid = document.getElementById("music-grid");
const submitMusicButton = document.getElementById("submit-music");

// "編輯名稱" 按鈕點擊事件
editButton.addEventListener("click", () => {
    if (isEditing) {
        // 保存新名稱
        const inputField = document.getElementById("name-input");
        nameDisplay.textContent = inputField.value;
        nameDisplay.style.display = "block";
        inputField.remove();
        editButton.textContent = "edit";
    } else {
        // 切換到編輯模式
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "name-input";
        inputField.value = nameDisplay.textContent;
        nameDisplay.style.display = "none";
        nameDisplay.parentNode.insertBefore(inputField, editButton);
        editButton.textContent = "save";
    }
    isEditing = !isEditing; // 切換狀態
});

// "新增音樂" 按鈕點擊事件
addMusicButton.addEventListener("click", () => {
    musicForm.style.display = "block"; // 顯示表單
});

// "提交音樂" 按鈕點擊事件
submitMusicButton.addEventListener("click", () => {
    const musicLink = document.getElementById("music-link").value;
    const musicName = document.getElementById("music-name").value;

    if (musicLink && musicName) {
        // 創建音樂項目
        const musicItem = document.createElement("div");
        musicItem.className = "music-item";

        const musicAnchor = document.createElement("a");
        musicAnchor.href = musicLink;
        musicAnchor.target = "_blank";

        const musicImg = document.createElement("img");
        musicImg.src = "https://github.com/wendy437/112207437_HW4/blob/main/spotify_icon.png?raw=true";
        musicImg.alt = musicName;

        const musicText = document.createElement("p");
        musicText.textContent = musicName;

        musicAnchor.appendChild(musicImg);
        musicItem.appendChild(musicAnchor);
        musicItem.appendChild(musicText);
        musicGrid.appendChild(musicItem);

        // 清空表單並隱藏
        document.getElementById("music-link").value = "";
        document.getElementById("music-name").value = "";
        musicForm.style.display = "none";
    } else {
        alert("Please fill out all fields!"); // 提示用戶補全信息
    }
});
