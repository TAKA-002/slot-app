export default function Form() {
  return (
    <form action="http://localhost:3000/api/form.php" method="post">
      <label htmlFor="item_name">こうもく ／ なまえ</label>
      <input id="item_name" name="input_value" type="text" placeholder="ここに入力してください。" />
      <input type="submit" value="確認" />
    </form>
  );
}
