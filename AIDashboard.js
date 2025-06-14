// client/src/pages/AIDashboard.js
const AINotificationPanel = () => {
  const [settings, setSettings] = useState({
    autoSend: true,
    minScore: 60,
    maxDaily: 5
  });

  const updateSettings = async (newSettings) => {
    await api.post('/ai/notification-settings', newSettings);
    setSettings(newSettings);
  };

  return (
    <div className="notification-controls">
      <Toggle 
        label="Auto-send Notifications"
        checked={settings.autoSend}
        onChange={(e) => updateSettings({...settings, autoSend: e.target.checked})}
      />
      <Slider
        label="Minimum Score"
        value={settings.minScore}
        onChange={(e, val) => updateSettings({...settings, minScore: val})}
        min={0}
        max={100}
      />
    </div>
  );
};